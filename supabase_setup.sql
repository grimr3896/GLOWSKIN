-- Supabase Setup Script for Dermal Basics
-- Run this in your Supabase SQL Editor

-- 1. Profiles table (extends auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  name text,
  phone text,
  role text check (role in ('customer', 'admin')) default 'customer',
  preferences jsonb default '{"skinType": "", "concerns": []}',
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Products table
create table if not exists public.products (
  id text primary key,
  name text not null,
  category text not null,
  subcategory text not null,
  price_amount numeric(10, 2) not null, -- Stores the numeric price
  price_display text not null,          -- Stores the displayed price (e.g. "$14.00")
  image_url text not null,
  benefits text[] default '{}',
  ingredients text,
  how_to_use text[] default '{}',
  limited boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Product reviews
create table if not exists public.reviews (
  id uuid default gen_random_uuid() primary key,
  product_id text references public.products(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete set null,
  user_name text not null,
  rating integer check (rating >= 1 and rating <= 5) not null,
  comment text,
  date timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Orders
create table if not exists public.orders (
  id uuid default gen_random_uuid() primary key,
  order_number text unique not null,
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  status text check (status in ('pending', 'processing', 'shipped', 'delivered', 'cancelled')) default 'pending',
  shipping_name text not null,
  shipping_address text not null,
  shipping_city text not null,
  shipping_state text not null,
  shipping_zip text not null,
  shipping_method text check (shipping_method in ('standard', 'express')) default 'standard',
  payment_method text check (payment_method in ('card', 'mpesa')) not null,
  payment_status text check (payment_status in ('pending', 'succeeded', 'failed')) default 'pending',
  stripe_payment_intent_id text,
  subtotal numeric(10, 2) not null,
  shipping_cost numeric(10, 2) not null,
  tax numeric(10, 2) not null,
  total numeric(10, 2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Order Items
create table if not exists public.order_items (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  product_id text references public.products(id) on delete set null,
  product_name text not null,
  quantity integer not null check (quantity > 0),
  price numeric(10, 2) not null,
  subtotal numeric(10, 2) not null
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.reviews enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- RLS Policies

-- Products: Anyone can view
create policy "Allow public read access on products"
  on public.products for select
  using (true);

-- Profiles: Users can manage their own
create policy "Allow individuals to view their own profiles"
  on public.profiles for select
  using ( auth.uid() = id );

create policy "Allow individuals to update their own profiles"
  on public.profiles for update
  using ( auth.uid() = id );

-- Reviews: Public read, Auth write
create policy "Allow public read access on reviews"
  on public.reviews for select
  using (true);

create policy "Allow authenticated users to insert reviews"
  on public.reviews for insert
  with check ( auth.role() = 'authenticated' );

-- Orders: Users can only see their own
create policy "Users can view their own orders"
  on public.orders for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own orders"
  on public.orders for insert
  with check ( auth.uid() = user_id );

-- Order Items
create policy "Users can view their own order items"
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders
      where public.orders.id = public.order_items.order_id
      and public.orders.user_id = auth.uid()
    )
  );

-- Trigger: Automatically create a profile when a new user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Insert sample products (matching constants.ts)
insert into public.products (id, name, category, subcategory, price_amount, price_display, image_url, benefits, ingredients, how_to_use, limited)
values 
('essence-1', 'Hydra-Balance Gentle Cleanser', 'Skincare', 'Cleansers', 14.00, '$14.00', 'https://i.pinimg.com/736x/29/77/8e/29778e3415cf24c4cf273b18be504ec8.jpg', '{"Deeply purifies without stripping naturally occurring lipids","Restores the skin sanctuary microbiome","Neutralizes urban environmental pollutants"}', 'Aqua (Water), Glycerin, Decyl Glucoside, Rosa Damascena Flower Water, Panthenol, Allantoin, Aloe Barbadensis Leaf Juice.', '{"Apply to damp skin","Massage in circular motions for 60 solar seconds","Rinse with lukewarm water"}', false),
('essence-2', 'Midnight Recovery Oil', 'Skincare', 'Serums', 28.00, '$28.00', 'https://i.pinimg.com/736x/8d/f3/d9/8df3d957d07963e63964d4206e98b3c9.jpg', '{"Accelerates nocturnal cellular regeneration","Visibly reduces fine lines and architectural fatigue","Provides deep antioxidant protection"}', 'Squalane, Rosa Canina Fruit Oil, Oenothera Biennis (Evening Primrose) Oil, Lavandula Angustifolia (Lavender) Oil, Tocopherol.', '{"Warm 2-3 drops between palms","Press gently into face and neck before slumber","Follow with moisturizer if required"}', false),
('essence-3', 'Barrier Support Moisturizer', 'Skincare', 'Moisturizers', 22.00, '$22.00', 'https://i.pinimg.com/736x/ca/7f/77/ca7f77935409ee633d906e57d81a967c.jpg', '{"Fortifies the moisture barrier with ceramides","Provides 24-hour weightless hydration","Calms visible redness and dermal distress"}', 'Purified Water, Caprylic/Capric Triglyceride, Niacinamide, Glycerin, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine.', '{"Apply morning and night","Smooth over face and neck as the final skincare layer"}', false),
('essence-5', 'Glow Manifest Highlighter', 'Makeup', 'Highlighter', 18.00, '$18.00', 'https://i.pinimg.com/736x/d6/3e/73/d63e7343dccdcf3ba2d9b1c7dc5ea042.jpg', '{"Captures and diffuses ethereal light","Seamlessly blends into the skin profile","Infused with botanical nourishing oils"}', 'Mica, Titanium Dioxide, Iron Oxides, Squalane, Jojoba Oil, Caprylic/Capric Triglyceride.', '{"Apply to high points of the face","Dab onto cupid''s bow and inner eyes for radiance"}', false);

-- Insert sample reviews
insert into public.reviews (product_id, user_name, rating, comment)
values
('essence-1', 'Elena V.', 5, 'The sanctity of my skin has never felt so respected. Truly a divine cleanser.'),
('essence-1', 'Marcus K.', 4, 'Excellent purification without the usual dermal distress.'),
('essence-2', 'Sophia R.', 5, 'My nocturnal cycle is now complete. The morning radiance is undeniable.'),
('essence-3', 'Julian M.', 5, 'A fortress for the skin barrier. Indispensable for the winter archive.');

import { createClient } from '@supabase/supabase-js';
import { PRODUCTS } from '../src/constants';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Seeding products...');

  for (const product of PRODUCTS) {
    const { reviews, ...productData } = product;

    // Insert product
    const { error: productError } = await supabase
      .from('products')
      .upsert(productData);

    if (productError) {
      console.error(`Error inserting product ${product.id}:`, productError);
      continue;
    }

    // Insert reviews
    if (reviews && reviews.length > 0) {
      const reviewsWithProductId = reviews.map(r => ({
        ...r,
        product_id: product.id
      }));

      const { error: reviewError } = await supabase
        .from('reviews')
        .upsert(reviewsWithProductId);

      if (reviewError) {
        console.error(`Error inserting reviews for ${product.id}:`, reviewError);
      }
    }
  }

  console.log('Seeding complete!');
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});

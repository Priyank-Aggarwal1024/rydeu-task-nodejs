const Pricing = require("../models/pricing.model");
const initialPricing = require("../data/initialPricing");

async function seedPricingData() {
  try {
    for (const pricing of initialPricing) {
      const exists = await Pricing.findOne({
        city: pricing.city,
        vehicle_type: pricing.vehicle_type,
        country: pricing.country,
      });

      if (!exists) {
        await Pricing.create(pricing);
        console.log(
          `Inserted pricing for ${pricing.city} (${pricing.vehicle_type})`
        );
      } else {
        console.log(
          `Pricing already exists for ${pricing.city} (${pricing.vehicle_type}). Skipping...`
        );
      }
    }
  } catch (err) {
    console.error("Error seeding pricing data:", err);
  }
}

module.exports = seedPricingData;

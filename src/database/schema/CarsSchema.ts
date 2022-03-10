import { tableSchema } from '@nozbe/watermelondb';

export const carsSchema = tableSchema({
  name: 'cars',
  columns: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'brand',
      type: 'string'
    },
    {
      name: 'about',
      type: 'string'
    },
    {
      name: 'fuel_type',
      type: 'string'
    },
    {
      name: 'period',
      type: 'string'
    },
    {
      name: 'price',
      type: 'string'
    },
    {
      name: 'thumbnail',
      type: 'string'
    },
  ]
});

export type Property = {
  id: number;
  title: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: 'Available' | 'Under Contract' | 'New Listing';
  type: 'Single Family' | 'Condo' | 'Townhome' | 'Multi-family';
};

export type Lead = {
  id: number;
  name: string;
  email: string;
  interest: string;
  source: string;
  stage: 'New' | 'Qualified' | 'Follow Up';
};

export const properties: Property[] = [
  {
    id: 1,
    title: 'Maple Grove Residence',
    city: 'Austin',
    state: 'TX',
    price: 485000,
    beds: 4,
    baths: 3,
    sqft: 2450,
    status: 'Available',
    type: 'Single Family',
  },
  {
    id: 2,
    title: 'Oak Crest Townhome',
    city: 'Dallas',
    state: 'TX',
    price: 370000,
    beds: 3,
    baths: 2,
    sqft: 1890,
    status: 'New Listing',
    type: 'Townhome',
  },
  {
    id: 3,
    title: 'Silverline Condo',
    city: 'Houston',
    state: 'TX',
    price: 295000,
    beds: 2,
    baths: 2,
    sqft: 1280,
    status: 'Under Contract',
    type: 'Condo',
  },
];

export const leads: Lead[] = [
  {
    id: 1,
    name: 'Maya Lopez',
    email: 'maya@example.com',
    interest: '3 bedroom family home',
    source: 'Website',
    stage: 'Qualified',
  },
  {
    id: 2,
    name: 'Greg Sanders',
    email: 'greg@example.com',
    interest: 'Rental property investment',
    source: 'Referral',
    stage: 'New',
  },
  {
    id: 3,
    name: 'Tara Chen',
    email: 'tara@example.com',
    interest: 'Luxury condo in downtown',
    source: 'Social Media',
    stage: 'Follow Up',
  },
];

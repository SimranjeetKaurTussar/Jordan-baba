import React from 'react';
import {
  Sprout,
  FlaskConical,
  Hammer,
  Sparkles,
  Wrench,
  Shirt,
  Pill,
} from 'lucide-react';

export type IconType = React.ComponentType<{ size?: number; className?: string }>;

export interface Subcategory {
  id: string;
  name: string;
}

export interface Showcase {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  Icon: IconType;
  subcategories: Subcategory[];
  showcases: Showcase[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'agri',
    name: 'Agri-Food',
    Icon: Sprout,
    subcategories: [
      { id: 'bev', name: 'Beverages' },
      { id: 'dairy', name: 'Dairy & livestock products' },
      { id: 'fresh', name: 'Fresh fruits & vegetables' },
      { id: 'grains', name: 'Grains, cereals & pulses' },
      { id: 'processed', name: 'Processed & packaged foods' },
    ],
    showcases: [
      {
        id: 'citrus',
        title: 'Agri-Food',
        subtitle: 'Citrus Fruit',
        image:
          'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'raisins',
        title: 'Agri-Food',
        subtitle: 'Preserved Fruit',
        image:
          'https://images.unsplash.com/photo-1546549039-49cfa77abc7c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'herbs',
        title: 'Agri-Food',
        subtitle: 'Herbs & Spices',
        image:
          'https://images.unsplash.com/photo-1517260739337-6799d0e23b3d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'chem',
    name: 'Chemicals',
    Icon: FlaskConical,
    subcategories: [
      { id: 'plastics', name: 'Plastics & Polymers' },
      { id: 'fert', name: 'Fertilizers' },
      { id: 'clean', name: 'Industrial Cleaners' },
      { id: 'solv', name: 'Solvents' },
      { id: 'spec', name: 'Specialty Chemicals' },
    ],
    showcases: [
      {
        id: 'poly',
        title: 'Chemicals',
        subtitle: 'Industrial Polymers',
        image:
          'https://images.unsplash.com/photo-1523438885200-e635ba2f6ea5?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'granules',
        title: 'Chemicals',
        subtitle: 'Plastic Granules',
        image:
          'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'constr',
    name: 'Constructions And Building Materials',
    Icon: Hammer,
    subcategories: [
      { id: 'cement', name: 'Cement & Concrete' },
      { id: 'steel', name: 'Steel & Metal Products' },
      { id: 'hardware', name: 'Building Hardware' },
      { id: 'ins', name: 'Insulation' },
      { id: 'fin', name: 'Finishing Materials' },
    ],
    showcases: [
      {
        id: 'concrete',
        title: 'Construction',
        subtitle: 'Concrete Mix',
        image:
          'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'steel',
        title: 'Construction',
        subtitle: 'Reinforcing Steel',
        image:
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'deadsea',
    name: 'Dead Sea Products',
    Icon: Sparkles,
    subcategories: [
      { id: 'salts', name: 'Bath Salts' },
      { id: 'mud', name: 'Dead Sea Mud' },
      { id: 'skincare', name: 'Skincare' },
      { id: 'oils', name: 'Aroma & Oils' },
      { id: 'kits', name: 'Gift Kits' },
    ],
    showcases: [
      {
        id: 'mudmask',
        title: 'Dead Sea',
        subtitle: 'Mineral Mud Mask',
        image:
          'https://images.unsplash.com/photo-1619607146033-21b4b7c2e82a?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'salt',
        title: 'Dead Sea',
        subtitle: 'Bath Salt',
        image:
          'https://images.unsplash.com/photo-1542634093-07d9e7d7c5c9?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'eng',
    name: 'Engineering And Electrical Industries',
    Icon: Wrench,
    subcategories: [
      { id: 'motors', name: 'Motors' },
      { id: 'controls', name: 'Controls' },
      { id: 'tools', name: 'Tools' },
      { id: 'wires', name: 'Wires & Cables' },
      { id: 'panels', name: 'Panels' },
    ],
    showcases: [
      {
        id: 'cables',
        title: 'Engineering',
        subtitle: 'Industrial Cables',
        image:
          'https://images.unsplash.com/photo-1581092921461-eab62e97a776?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'tools',
        title: 'Engineering',
        subtitle: 'Power Tools',
        image:
          'https://images.unsplash.com/photo-1581092925493-287eb9fede7d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'garment',
    name: 'Garment And Textile Industries',
    Icon: Shirt,
    subcategories: [
      { id: 'fabric', name: 'Fabrics' },
      { id: 'apparel', name: 'Apparel' },
      { id: 'home', name: 'Home Textiles' },
      { id: 'leather', name: 'Leather & Accessories' },
      { id: 'yarn', name: 'Yarn' },
    ],
    showcases: [
      {
        id: 'fabric',
        title: 'Textile',
        subtitle: 'Premium Fabrics',
        image:
          'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'clothes',
        title: 'Textile',
        subtitle: 'Apparel',
        image:
          'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'pharma',
    name: 'Pharma & Medical',
    Icon: Pill,
    subcategories: [
      { id: 'med', name: 'Medical Devices' },
      { id: 'drugs', name: 'Pharmaceuticals' },
      { id: 'supplies', name: 'Hospital Supplies' },
      { id: 'care', name: 'Personal Care' },
      { id: 'lab', name: 'Lab & Diagnostics' },
    ],
    showcases: [
      {
        id: 'devices',
        title: 'Pharma',
        subtitle: 'Medical Devices',
        image:
          'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'pharma',
        title: 'Pharma',
        subtitle: 'Pharmaceuticals',
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
];

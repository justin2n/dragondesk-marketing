import React from 'react';
import FeaturesComponent from '../components/Features';
import Programs from '../components/Programs';
import CTA from '../components/CTA';
import {
  Users,
  Target,
  Mail,
  MessageSquare,
  CreditCard,
  Calendar,
  BarChart3,
  QrCode,
  Building2,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const detailedFeatures = [
  {
    icon: Users,
    title: 'Complete Member Lifecycle',
    description: 'Track every member from their first inquiry to becoming a black belt. See their full history, attendance records, billing status, and belt progression in one unified profile.',
    details: [
      'Lead → Trialer → Member → Alumni tracking',
      'Custom fields for any data you need',
      'Family account linking',
      'Document storage (waivers, contracts)',
      'Notes and communication history'
    ]
  },
  {
    icon: Target,
    title: 'Lead Capture & Conversion',
    description: 'Never lose another lead. Capture inquiries from your website, social media, and walk-ins. Automated follow-up sequences turn leads into paying members.',
    details: [
      'Embeddable lead capture forms',
      'Lead source tracking (web, walk-in, referral)',
      'Automated email/SMS follow-up sequences',
      'Trial scheduling integration',
      'Conversion rate analytics by source'
    ]
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Send beautiful, targeted email campaigns. Segment by program, belt rank, membership status, or any custom criteria. A/B test to maximize results.',
    details: [
      'Drag-and-drop email builder',
      'Pre-built templates for gyms',
      'Advanced audience segmentation',
      'A/B testing for subject lines',
      'Open rate and click tracking'
    ]
  },
  {
    icon: MessageSquare,
    title: 'SMS Campaigns',
    description: 'Reach members instantly with text messages. Perfect for class reminders, promotions, and urgent announcements.',
    details: [
      'Bulk SMS sending',
      'Personalized messages with merge tags',
      'Scheduled sending',
      'Two-way messaging',
      'Delivery and response tracking'
    ]
  },
  {
    icon: CreditCard,
    title: 'Billing & Payments',
    description: 'Integrated Stripe billing handles subscriptions, one-time payments, and failed payment recovery automatically.',
    details: [
      'Monthly/annual subscription plans',
      'Family and group billing',
      'Automatic failed payment retry',
      'Invoice generation',
      'Payment method management'
    ]
  },
  {
    icon: Calendar,
    title: 'Class Scheduling',
    description: 'Create your class schedule once and let it repeat. Members see upcoming classes, instructors get notified, and attendance is tracked automatically.',
    details: [
      'Recurring class schedules',
      'Instructor assignment',
      'Class capacity limits',
      'Waitlist management',
      'Calendar export (iCal, Google)'
    ]
  },
  {
    icon: QrCode,
    title: 'QR Check-In Kiosk',
    description: 'Set up a tablet at your front desk for contactless check-ins. Members scan their personal QR code or search by name.',
    details: [
      'QR code for each member',
      'Name/phone search fallback',
      'Apple Wallet & Google Wallet passes',
      'Attendance history reports',
      'Check-in notifications'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'See exactly how your gym is performing. Track trial conversions, churn rates, revenue by program, and identify trends.',
    details: [
      'Trial-to-member conversion rates',
      'Churn tracking with reasons',
      'Revenue by program/location',
      'Attendance trends',
      'Custom date range reports'
    ]
  },
  {
    icon: Building2,
    title: 'Multi-Location Support',
    description: 'Manage multiple gym locations from one dashboard. Compare performance, share members, and maintain brand consistency.',
    details: [
      'Unified member database',
      'Per-location analytics',
      'Cross-location check-ins',
      'Location-specific pricing',
      'Staff access controls'
    ]
  }
];

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <section className="features-hero">
        <div className="container">
          <span className="section-label">Features</span>
          <h1>Everything Your Studio Needs</h1>
          <p>
            DragonDesk replaces your spreadsheets, email tools, billing system, and scheduling app
            with one integrated platform built specifically for martial arts studios.
          </p>
        </div>
      </section>

      <section className="detailed-features">
        <div className="container">
          {detailedFeatures.map((feature, index) => (
            <div key={index} className={`detailed-feature ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="feature-content">
                <div className="feature-icon-large">
                  <feature.icon size={32} />
                </div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <span className="check">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-visual">
                <div className="visual-placeholder">
                  <feature.icon size={80} strokeWidth={1} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Programs />
      <CTA />
    </div>
  );
};

export default FeaturesPage;

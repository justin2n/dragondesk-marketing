import React from 'react';
import {
  Users, Target, Mail, CreditCard, Calendar,
  BarChart3, QrCode, Building2, MessageSquare,
  Download, Shield, TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Full Member Lifecycle',
    description: 'Track every contact from Lead to Trialer to paying Member. One profile holds their belt rank, program, attendance history, and billing status.',
    color: 'red'
  },
  {
    icon: Target,
    title: 'Lead & Trial Management',
    description: 'Capture leads from any source. Move them to trial with one click. See exactly who\'s ready to convert and who needs follow-up.',
    color: 'orange'
  },
  {
    icon: Mail,
    title: 'Email & SMS Campaigns',
    description: 'Send targeted campaigns by program, belt rank, or status. Build audiences, A/B test your messaging, and track conversions.',
    color: 'blue'
  },
  {
    icon: CreditCard,
    title: 'Per-Location Stripe Billing',
    description: 'Each location can have its own Stripe account — perfect for separate LLCs. Manage subscriptions, invoices, and failed payment recovery.',
    color: 'green'
  },
  {
    icon: Calendar,
    title: 'Classes & Attendance',
    description: 'Schedule recurring classes, assign instructors, and track attendance automatically. QR code kiosk check-in for the front desk.',
    color: 'purple'
  },
  {
    icon: BarChart3,
    title: 'Growth Analytics',
    description: 'Trial conversion rates, churn metrics, MRR, ACV, and ALTV — all broken down by program, location, or time period.',
    color: 'cyan'
  },
  {
    icon: QrCode,
    title: 'QR Check-In Kiosk',
    description: 'Members scan their QR code or Apple/Google Wallet pass. No paper sign-in sheets. Attendance reports update in real time.',
    color: 'pink'
  },
  {
    icon: Building2,
    title: 'Multi-Location',
    description: 'Run multiple gym locations from one dashboard. Compare performance, filter by location, and configure each independently.',
    color: 'amber'
  },
  {
    icon: Download,
    title: 'MyStudio Migration',
    description: 'Switching from MyStudio? Import your leads, trials, and members via CSV in minutes. Programs and pricing plans auto-created.',
    color: 'lime'
  },
  {
    icon: Shield,
    title: 'Workforce Management',
    description: 'Manage instructors, staff roles, and permissions. Assign staff to locations. Control exactly who sees what.',
    color: 'indigo'
  },
  {
    icon: TrendingUp,
    title: 'Website Personalization',
    description: 'Run A/B tests on your website. Show different experiences to different audiences. Track which version drives more sign-ups.',
    color: 'teal'
  },
  {
    icon: MessageSquare,
    title: 'Social Media',
    description: 'Schedule posts across Facebook, Instagram, and more from one place. Plan your content calendar in advance.',
    color: 'violet'
  },
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">
            Everything to Run Your
            <br />Martial Arts Business
          </h2>
          <p className="section-subtitle">
            Stop switching between five different apps. DragonDesk™ replaces your
            spreadsheets, email tool, billing system, and scheduling app in one platform.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card color-${feature.color}`}>
              <div className="feature-icon">
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

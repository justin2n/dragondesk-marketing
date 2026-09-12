import React, { useState } from 'react';
import {
  Mail, FlaskConical, PhoneCall, Share2, BarChart3,
  ChevronDown, LifeBuoy, ArrowRight,
} from 'lucide-react';

// Support & troubleshooting, organised by product. Each product covers how to
// set it up and the problems studios actually hit, with the fix for each.

const PRODUCTS = [
  {
    id: 'engage',
    icon: Mail,
    name: 'DragonDesk: Engage',
    tagline: 'Email and SMS campaigns to your members and leads.',
    setup: [
      {
        title: 'Connect an email provider',
        steps: [
          'Go to Settings → DragonDesk: Engage → Email Settings.',
          'Choose your provider: SMTP, SendGrid, Mailgun, or Amazon SES.',
          'Enter the credentials for that provider. Keys are encrypted at rest and are never shown again after saving — you will see "(set — leave blank to keep)" when editing.',
          'Set the From Email and From Name your members will see.',
          'Click Send Test Email and confirm it arrives before sending a campaign.',
        ],
      },
      {
        title: 'Authenticate your domain (DKIM)',
        steps: [
          'Go to Settings → DragonDesk: Engage → DKIM Authentication.',
          'Enter your sending domain. DragonDesk generates a key pair and shows you a DNS TXT record.',
          'Add that TXT record at your DNS host, using the selector shown (default: dragondesk).',
          'Return to the DKIM tab and verify. DNS can take up to an hour to propagate.',
        ],
      },
      {
        title: 'Connect Twilio for SMS',
        steps: [
          'Go to Settings → DragonDesk: Engage → SMS (Twilio).',
          'Enter your Account SID, Auth Token, and From Number from the Twilio console.',
          'Optionally set a Messaging Service SID — if present it overrides the From Number.',
          'In Twilio, point your number’s Messaging inbound webhook at your DragonDesk SMS inbound URL so STOP and START replies stay in sync.',
          'Complete A2P 10DLC brand and campaign registration in Twilio. US carriers require it.',
        ],
      },
    ],
    issues: [
      {
        problem: 'Emails send but land in spam',
        cause: 'The receiving mail server cannot verify that you authorised the send.',
        fix: 'Complete DKIM setup above, and add an SPF record authorising your provider. Both are DNS records at your domain host. Also make sure the From Email is on the domain you authenticated — a mismatch between the two is the single most common cause.',
      },
      {
        problem: 'Provider rejects sends from your address',
        cause: 'The sending domain is not verified with that provider.',
        fix: 'SendGrid, Mailgun and SES each require you to verify the domain in their own dashboard, separately from DKIM in DragonDesk. Verify there first, then make sure From Email matches the verified domain exactly.',
      },
      {
        problem: 'A test email works but a campaign does not reach everyone',
        cause: 'Audience filters, or members without a valid email address.',
        fix: 'Open the audience and check its member count before sending. Members with no email, or who have unsubscribed, are excluded from the count and the send.',
      },
      {
        problem: 'SMS fails to send',
        cause: 'Usually A2P registration, or a number that cannot send to the destination.',
        fix: 'Check the Twilio console for the specific error on the message. Unregistered A2P traffic to US numbers is blocked by carriers, not by DragonDesk. Confirm your From Number is SMS-capable and, if using a Messaging Service, that the number is in it.',
      },
      {
        problem: 'Members still receive texts after replying STOP',
        cause: 'The inbound webhook is not pointed at DragonDesk.',
        fix: 'Set the Messaging inbound webhook on your Twilio number as described in setup. Without it, opt-outs are recorded by Twilio but never reach DragonDesk, so your audience counts stay wrong.',
      },
      {
        problem: 'Saving credentials warns that encryption is not configured',
        cause: 'The encryption key for credentials at rest is missing on the server.',
        fix: 'Contact support. Credentials still save, but they are not encrypted at rest until this is resolved.',
      },
    ],
  },
  {
    id: 'optimize',
    icon: FlaskConical,
    name: 'DragonDesk: Optimize',
    tagline: 'A/B tests, promo bars, and offer modals on your website.',
    setup: [
      {
        title: 'Install the tracking snippet',
        steps: [
          'Go to Settings → Tracking snippet and copy the script tag. It contains your workspace token.',
          'Paste it into the <head> of every page of your website, before the closing </head> tag.',
          'The tag is async and will not slow your page down.',
          'Reload your site, then check Settings → Tracking to confirm DragonDesk is receiving data.',
        ],
      },
      {
        title: 'Restrict where the snippet may run (optional)',
        steps: [
          'Go to Settings → Allowed domains.',
          'Leave it empty to accept data from any site carrying your snippet.',
          'Add your domain to accept data only from it and its subdomains. Enter the bare host, for example dragondeskapp.com — not the full URL.',
        ],
      },
      {
        title: 'Create your first experience',
        steps: [
          'Choose an Experience Type. Page Edit changes text or styles on an existing page. Promo Bar injects a banner. Offer Modal shows a popup on load, exit intent, or scroll depth.',
          'Enter the Page URL and click Load Preview to open the visual editor.',
          'For a Page Edit, Variant A is your control and Variant B is the change. Traffic Split sets the percentage who see B — usually 50.',
          'Promo bars and modals default to showing to 100% of your audience, since there is no meaningful control.',
          'Pick a Conversion Goal. Without one, the experience tracks views and clicks but can never declare a winner.',
          'Save as Draft to keep working, or set Status to Running to go live.',
        ],
      },
      {
        title: 'Tune how winners are decided',
        steps: [
          'Go to Settings → Experiments.',
          'Confidence Threshold is how sure a test must be before a variant is called the winner. 95% is the standard; 90% calls winners sooner but is wrong more often.',
          'Minimum Data sets how much traffic is required before any verdict is attempted — by default 30 visitors per variant and 5 conversions in total.',
          'These apply to every experience in your workspace.',
        ],
      },
    ],
    issues: [
      {
        problem: 'The dashboard shows no data after installing the snippet',
        cause: 'The snippet is not on the page, or the domain is not allowed.',
        fix: 'View source on your site and confirm the script tag is present in the <head>. Then check Settings → Allowed domains: if anything is listed, your site’s domain must be among it. An allowed-domains mismatch fails silently — the script still loads, but the data is rejected.',
      },
      {
        problem: 'The visual editor preview is blank or unstyled',
        cause: 'The page blocks embedding, or is slow to load.',
        fix: 'Give it a few seconds on a large page. If it stays blank, confirm the URL loads normally in a browser tab and that you entered the full URL including https://. If your site sits behind a login or an IP allow-list, the editor cannot reach it.',
      },
      {
        problem: 'A test has been running for days and still says "collecting data"',
        cause: 'It has not reached the minimum data threshold.',
        fix: 'The analytics view tells you exactly what is missing — visitors still needed per variant, conversions still needed, and roughly how long at current traffic. If your traffic is low, either lower the Minimum Data in Settings → Experiments or accept a longer run. Lowering it makes verdicts less reliable.',
      },
      {
        problem: 'Conversions are always zero',
        cause: 'No conversion goal is set, or the goal never fires.',
        fix: 'Check the experience has a goal other than "No goal". If using Specific button/link clicked, confirm the CSS selector matches an element actually on the page. If using Form submitted, confirm the form triggers a real submit event rather than being intercepted by JavaScript.',
      },
      {
        problem: 'One variant is clearly ahead but no winner is declared',
        cause: 'The difference is not yet statistically distinguishable from chance.',
        fix: 'This is working as intended. A lead on small numbers is often noise. The analytics view shows your current confidence against the threshold and how many more visitors are needed. Resist calling it early.',
      },
      {
        problem: 'A promo bar or modal does not appear on the site',
        cause: 'Status, targeting, or frequency.',
        fix: 'Confirm Status is Running, not Draft. Check the targeting scope — if set to a specific page, the path must match. Check the frequency setting: "once" and "session" deliberately stop it reappearing for someone who has already seen or dismissed it. Try a private window.',
      },
      {
        problem: 'You cancelled and want your data back',
        cause: 'Cancellation schedules permanent deletion.',
        fix: 'Billing stops at the end of your paid period, and your tests and results are deleted after that. If you resume before the period ends, nothing is lost. If you are past it, contact support immediately — there is a short grace window before deletion becomes irreversible.',
      },
    ],
  },
  {
    id: 'outreach',
    icon: PhoneCall,
    name: 'DragonDesk: Outreach',
    tagline: 'AI-powered call campaigns to leads and members.',
    setup: [
      {
        title: 'Build a call campaign',
        steps: [
          'Open DragonDesk: Outreach and create a campaign.',
          'Write the Call Script the agent follows, and set a clear Call Goal — for example, book a trial class.',
          'Select the audience to call.',
          'Save the campaign.',
        ],
      },
      {
        title: 'Before your first campaign runs',
        steps: [
          'Outreach requires voice calling to be provisioned for your studio. This is not self-serve today — contact support and we will set it up with you.',
          'Calling is regulated. Consent requirements and calling-hour restrictions vary by state, and are your responsibility as the caller.',
        ],
      },
    ],
    issues: [
      {
        problem: 'A campaign is saved but no calls are placed',
        cause: 'Voice calling is not yet provisioned for the studio.',
        fix: 'Campaign setup and calling are provisioned separately. Contact support to enable calling on your account.',
      },
      {
        problem: 'Calls reach voicemail most of the time',
        cause: 'Call timing.',
        fix: 'Review when your audience is likely to answer. Calling outside permitted hours is also a legal risk, not just an efficiency one.',
      },
      {
        problem: 'Members ask not to be called again',
        cause: 'Do-not-call requests must be honoured.',
        fix: 'Remove them from the audience immediately and record the request on their member profile so future audiences exclude them.',
      },
    ],
  },
  {
    id: 'social',
    icon: Share2,
    name: 'DragonDesk: Social',
    tagline: 'Schedule posts and manage comments across your social accounts.',
    setup: [
      {
        title: 'Connect your accounts',
        steps: [
          'Go to Settings → DragonDesk: Social → Social Accounts.',
          'Connect Facebook, Instagram, Twitter, or LinkedIn.',
          'For Facebook and Instagram, connect the Page or Professional account rather than a personal profile — personal profiles cannot be posted to via the API.',
          'Confirm the connected account name shown is the one you expect, especially if you manage several pages.',
        ],
      },
      {
        title: 'Schedule your first post',
        steps: [
          'Create a post, choose the accounts to publish to, and set a time.',
          'Check each platform’s media requirements — image dimensions and video length limits differ, and a post rejected by one platform may still publish on another.',
        ],
      },
    ],
    issues: [
      {
        problem: 'A scheduled post did not publish',
        cause: 'Most often an expired access token.',
        fix: 'Social platforms expire access tokens periodically, and Instagram and Facebook are the most aggressive about it. Reconnect the account in Settings → Social Accounts. Reconnecting does not affect posts already published.',
      },
      {
        problem: 'An account shows as connected but posting fails',
        cause: 'Permissions were changed or revoked on the platform side.',
        fix: 'Disconnect and reconnect, and accept all requested permissions. Removing an app’s access in your Facebook or LinkedIn settings breaks posting without changing how it looks here.',
      },
      {
        problem: 'Instagram posts fail but Facebook works',
        cause: 'Instagram requires a Professional account linked to a Facebook Page.',
        fix: 'Convert the Instagram account to Business or Creator, link it to your Facebook Page, then reconnect it here.',
      },
      {
        problem: 'Comments are not appearing',
        cause: 'Permission scope, or delay.',
        fix: 'Comment access is a separate permission from posting. Reconnect the account and accept comment permissions. Note that comments can take a few minutes to sync.',
      },
    ],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    name: 'DragonDesk: Analytics',
    tagline: 'Member growth, revenue, attribution, and website behaviour.',
    setup: [
      {
        title: 'Studio analytics',
        steps: [
          'Member, program, attendance, and revenue reporting works as soon as you have data in DragonDesk. No setup is required.',
          'Figures follow your selected location. If numbers look low, check the location selector first.',
        ],
      },
      {
        title: 'Website analytics and attribution',
        steps: [
          'Website behaviour comes from the DragonDesk tracking snippet — the same one used by Optimize.',
          'Attribution is first-touch: a member is credited to the campaign or channel that first brought them in, and that credit is never overwritten.',
          'For attribution to work, your campaign links must carry UTM parameters.',
        ],
      },
    ],
    issues: [
      {
        problem: 'Website analytics are empty',
        cause: 'The tracking snippet is missing, or the domain is not allowed.',
        fix: 'Follow the Optimize snippet setup above — it is the same snippet. Check Settings → Allowed domains if you have restricted it.',
      },
      {
        problem: 'Attribution shows most members as direct or unknown',
        cause: 'Inbound links carry no UTM parameters.',
        fix: 'Add UTM parameters to the links in your campaigns, ads, and social posts. Without them there is nothing to attribute to, and first-touch credit falls back to direct.',
      },
      {
        problem: 'A member is attributed to the wrong campaign',
        cause: 'First-touch attribution is recorded once and never rewritten.',
        fix: 'This is by design — it credits the campaign that first brought them in, not the most recent one they clicked. If someone first arrived months ago through another channel, that is what you will see.',
      },
      {
        problem: 'Revenue figures do not match Stripe',
        cause: 'Timing, refunds, or location scope.',
        fix: 'Check the date range and the selected location. Refunds and failed payments are reflected on different timelines than Stripe’s own dashboard. For a discrepancy you cannot explain, contact support with the date range and the two figures.',
      },
    ],
  },
];

function Issue({ problem, cause, fix }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" style={{ cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, margin: 0 }}>
        <span>{problem}</span>
        <ChevronDown
          size={18}
          style={{ flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </h3>
      {open && (
        <div style={{ marginTop: 12 }}>
          <p style={{ margin: '0 0 8px', opacity: 0.75 }}><strong>Why it happens:</strong> {cause}</p>
          <p style={{ margin: 0 }}><strong>How to fix it:</strong> {fix}</p>
        </div>
      )}
    </div>
  );
}

const Support = () => {
  return (
    <div className="features-page">
      <section className="pricing-hero">
        <div className="container">
          <span className="section-label">Support</span>
          <h1>Setup guides &amp; troubleshooting</h1>
          <p>
            How to set up each part of DragonDesk, and what to do when something is not
            working. Organised by product — jump to the one you need.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
            {PRODUCTS.map(p => (
              <a key={p.id} href={`#${p.id}`} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <p.icon size={16} /> {p.name.replace('DragonDesk: ', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {PRODUCTS.map(product => (
        <section key={product.id} id={product.id} className="comparison-section" style={{ scrollMarginTop: 90 }}>
          <div className="container">
            <div className="section-header">
              <div className="feature-icon-large" style={{ margin: '0 auto 1rem' }}>
                <product.icon size={32} />
              </div>
              <h2 className="section-title">{product.name}</h2>
              <p className="section-subtitle">{product.tagline}</p>
            </div>

            <h3 style={{ margin: '2rem 0 1rem' }}>Setting it up</h3>
            <div style={{ display: 'grid', gap: 16 }}>
              {product.setup.map(block => (
                <div key={block.title} className="faq-item">
                  <h3 style={{ marginTop: 0 }}>{block.title}</h3>
                  <ol style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.7 }}>
                    {block.steps.map((s, i) => <li key={i}>{s}</li>)}
                  </ol>
                </div>
              ))}
            </div>

            <h3 style={{ margin: '2.5rem 0 0.5rem' }}>Common issues</h3>
            <p style={{ opacity: 0.7, marginTop: 0, fontSize: 14 }}>Select a problem to see the cause and the fix.</p>
            <div style={{ display: 'grid', gap: 12 }}>
              {product.issues.map(issue => <Issue key={issue.problem} {...issue} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="comparison-section">
        <div className="container" style={{ maxWidth: 620 }}>
          <div className="faq-item" style={{ textAlign: 'center' }}>
            <div className="feature-icon-large" style={{ margin: '0 auto 1rem' }}>
              <LifeBuoy size={32} />
            </div>
            <h2 style={{ marginTop: 0 }}>Still stuck?</h2>
            <p>
              Tell us what you were doing, what you expected, and what happened instead. If there
              is an error message, include it exactly — it is usually the fastest route to a fix.
            </p>
            {/* A real navigation, not a router link: the browser scrolls to the
                #contact anchor on the homepage, which a client-side push would not. */}
            <a href="/#contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Contact support <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;

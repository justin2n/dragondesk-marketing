import React from 'react';
import { Link } from 'react-router-dom';

// Terms of Service for every DragonDesk product (the CRM and Optimize). The
// contracting party is 2N Digital LLC; section 15 extends the liability
// protections to its owners and staff personally. Change EFFECTIVE_DATE
// whenever the text changes materially.
const EFFECTIVE_DATE = 'September 24, 2026';
const CONTACT = 'support@dragondeskapp.com';

const Mail = () => <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;

const sections = [
  {
    id: 'agreement',
    title: 'Agreement to these Terms',
    body: (
      <>
        <p>
          These Terms of Service ("Terms") are a binding agreement between you and 2N Digital LLC
          ("2N Digital," "we," "us," or "our"). DragonDesk is a product and trademark of 2N Digital.
          These Terms govern your access to and use of the DragonDesk website at dragondeskapp.com,
          the DragonDesk studio management platform, DragonDesk: Optimize, the Optimize tracking
          snippet, and any related apps, emails, and support (together, the "Services").
        </p>
        <p>
          By creating an account, starting a trial, completing a purchase, installing our tracking
          snippet, or otherwise using the Services, you agree to these Terms. If you are accepting
          on behalf of a business or other organization, you represent that you have authority to
          bind that organization, and "you" means that organization. If you do not agree, do not
          use the Services.
        </p>
        <p>
          <strong>
            Section 16 contains a binding arbitration agreement and a class action and jury trial
            waiver. Please read it carefully.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: 'business-use',
    title: 'Business use only; eligibility',
    body: (
      <>
        <p>
          The Services are offered for business and professional use only, such as running a
          martial arts school, gym, or studio and its website. They are not offered to consumers
          for personal, family, or household purposes. You must be at least 18 years old and able
          to form a binding contract to use the Services.
        </p>
      </>
    ),
  },
  {
    id: 'accounts',
    title: 'Accounts and security',
    body: (
      <>
        <p>
          You must give accurate account information and keep it current. You are responsible for
          everything that happens under your account, including the actions of every user you
          invite, and for keeping passwords and access credentials confidential. Tell us promptly
          at <Mail /> if you believe your account has been accessed without authorization. We are
          not liable for any loss caused by someone using your credentials, whether or not you
          authorized it.
        </p>
      </>
    ),
  },
  {
    id: 'billing',
    title: 'Subscriptions, billing, and automatic renewal',
    body: (
      <>
        <p>
          <strong>Automatic renewal.</strong> Paid plans are subscriptions billed in advance on a
          recurring basis (monthly or annually, as shown when you purchase). YOUR SUBSCRIPTION
          RENEWS AUTOMATICALLY AT THE END OF EACH BILLING PERIOD, AND YOU AUTHORIZE US AND OUR
          PAYMENT PROCESSOR TO CHARGE YOUR PAYMENT METHOD THE THEN-CURRENT FEE FOR EACH RENEWAL
          UNTIL YOU CANCEL. You can cancel at any time as described in Section 5.
        </p>
        <p>
          <strong>Free trials.</strong> If we offer a free trial, it lasts for the period stated
          when you sign up. If you provided a payment method, your paid subscription begins and
          you will be charged when the trial ends unless you cancel before then. We may change or
          end trial offers at any time.
        </p>
        <p>
          <strong>Payment processing.</strong> Payments to us are processed by Stripe, Inc. By
          paying, you also agree to Stripe's applicable terms. We do not store your full card
          number.
        </p>
        <p>
          <strong>Price changes.</strong> We may change our prices. For an existing subscription,
          we will give you at least 30 days' notice by email before a new price takes effect, and
          the new price applies from your next renewal after that notice. If you do not agree to
          the new price, cancel before it takes effect.
        </p>
        <p>
          <strong>Taxes.</strong> Fees do not include taxes. You are responsible for all sales,
          use, value-added, and similar taxes on your purchase, other than taxes on our income.
        </p>
        <p>
          <strong>Failed payments.</strong> If a payment fails, we may retry the charge and may
          suspend or cancel your access to the Services until the balance is paid. A subscription
          canceled for non-payment is treated as a cancellation under Section 5, including the
          deletion of your data.
        </p>
        <p>
          <strong>No refunds.</strong> ALL FEES ARE NON-REFUNDABLE. We do not give refunds or
          credits for partial billing periods, unused time, downgrades, or periods when you did
          not use the Services, except where a refund is required by law. You agree not to
          dispute a valid charge with your card issuer instead of contacting us first at{' '}
          <Mail />.
        </p>
      </>
    ),
  },
  {
    id: 'cancellation',
    title: 'Cancellation, termination, and data deletion',
    body: (
      <>
        <p>
          <strong>Cancelling.</strong> You may cancel your subscription at any time from within
          the product or by emailing <Mail />. Cancellation takes effect at the end of the current
          paid billing period. You keep access until then, and you will not be charged again.
        </p>
        <p>
          <strong>What happens to your data.</strong>
        </p>
        <ul>
          <li>
            <strong>DragonDesk (studio management):</strong> after your subscription ends, we keep
            your data for 30 days so you can export it or reactivate. After those 30 days we
            permanently delete it.
          </li>
          <li>
            <strong>DragonDesk: Optimize:</strong> when your paid period ends after a
            cancellation, we permanently delete your workspace and all of its data, including
            experiences, audiences, tracking data, results, and users. There is no grace period.
          </li>
        </ul>
        <p>
          DELETION IS PERMANENT AND CANNOT BE UNDONE. It is your responsibility to export anything
          you want to keep before your data is deleted. We are not liable for any loss resulting
          from deletion carried out as described in these Terms. Copies in routine backups may
          persist for a limited time until those backups rotate out, and are not accessible for
          restoring your account.
        </p>
        <p>
          <strong>Our right to suspend or terminate.</strong> We may suspend or terminate your
          access immediately, with or without notice, if you breach these Terms, fail to pay, use
          the Services in a way that creates legal or security risk for us or others, or if we are
          required to by law. We may also stop offering any Service by giving you at least 30
          days' notice; in that case we will refund any prepaid fees for the period after the
          Service ends.
        </p>
      </>
    ),
  },
  {
    id: 'your-data',
    title: 'Your data',
    body: (
      <>
        <p>
          <strong>Ownership.</strong> "Customer Data" means the data you and your users put into
          the Services, and the data the Services collect on your behalf, such as member records
          and website visitor activity collected by the Optimize snippet. As between you and us,
          you own Customer Data. You grant us a worldwide, non-exclusive, royalty-free license to
          host, copy, process, transmit, and display Customer Data as needed to provide, secure,
          support, and improve the Services, and as required by law.
        </p>
        <p>
          <strong>How we handle it.</strong> We process Customer Data on your behalf and under
          your instructions as expressed through your use of the Services. We do not sell
          Customer Data. We use reasonable administrative, technical, and physical safeguards to
          protect it, but no system is perfectly secure, and we cannot guarantee that Customer
          Data will never be accessed, lost, or disclosed without authorization.
        </p>
        <p>
          <strong>Usage data.</strong> We may collect information about how the Services are used
          and may create aggregated or de-identified data that does not identify you, your users,
          or any individual. We may use that data for any lawful purpose, including improving the
          Services.
        </p>
        <p>
          <strong>Your responsibilities.</strong> You are solely responsible for Customer Data and
          for having every right, notice, and consent needed to collect it and let us process it.
          In particular, you are responsible for:
        </p>
        <ul>
          <li>
            Posting a privacy notice on your website, and getting any cookie or tracking consent
            required where your visitors are located, before installing or running the Optimize
            snippet.
          </li>
          <li>
            Getting a parent's or guardian's consent where required before entering information
            about minors, including children's class and membership records.
          </li>
          <li>
            Complying with laws that apply to your messages and marketing, including laws on email,
            text messages, and calls (such as CAN-SPAM and the TCPA), and honoring opt-outs.
          </li>
          <li>
            Complying with every privacy and data protection law that applies to you and to your
            members, customers, and website visitors, wherever they are located.
          </li>
        </ul>
        <p>
          <strong>Data we do not accept.</strong> Do not put the following into the Services
          except in fields we provide for that specific purpose: government identification numbers
          (such as Social Security numbers), full payment card or bank account numbers, health or
          medical information subject to HIPAA or similar laws, or other sensitive categories of
          personal data. We have no liability for such data if you submit it anyway.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-party services and payments you collect',
    body: (
      <>
        <p>
          The Services work with third-party services that we do not control, including Stripe
          for payments and providers for hosting and email delivery. Your use of a third-party
          service is governed by that provider's terms, and we are not responsible for its
          availability, security, acts, or omissions.
        </p>
        <p>
          If you use DragonDesk to bill your own members or customers, those payments are made
          between you and them through your own payment processor account. We are not a payment
          processor, money transmitter, or party to those transactions. You are solely
          responsible for your pricing, contracts, refunds, chargebacks, disputes, and taxes with
          your members and customers, and for your own compliance with your payment processor's
          terms.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>You agree not to, and not to let anyone else:</p>
        <ul>
          <li>use the Services for anything unlawful, fraudulent, deceptive, or harmful;</li>
          <li>
            use Optimize experiences to show deceptive offers, impersonate others, collect
            credentials or payment details under false pretenses, or distribute malware;
          </li>
          <li>send spam or unsolicited messages through the Services;</li>
          <li>
            upload content that infringes anyone's intellectual property, privacy, or other
            rights, or that is defamatory, obscene, or hateful;
          </li>
          <li>
            probe, scan, or test the vulnerability of the Services, bypass any security or usage
            limit, or access another customer's data;
          </li>
          <li>
            interfere with or overload the Services, or send automated traffic beyond ordinary
            use of our documented features;
          </li>
          <li>
            copy, resell, sublicense, or provide the Services to third parties as a service
            bureau, except to your own staff and members as the Services are designed;
          </li>
          <li>
            reverse engineer, decompile, or attempt to derive the source code of the Services,
            except to the extent the law expressly permits despite this restriction; or
          </li>
          <li>use the Services to build a competing product.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Our intellectual property',
    body: (
      <>
        <p>
          The Services, including all software, designs, text, graphics, and the DragonDesk name
          and logos, are owned by 2N Digital and its licensors and are protected by intellectual
          property laws. Subject to these Terms and payment of your fees, we grant you a limited,
          non-exclusive, non-transferable, non-sublicensable, revocable right to use the Services
          for your internal business purposes during your subscription. We reserve every right not
          expressly granted to you.
        </p>
        <p>
          If you send us feedback or suggestions, you grant us a perpetual, irrevocable,
          royalty-free right to use them for any purpose without obligation to you.
        </p>
      </>
    ),
  },
  {
    id: 'service-changes',
    title: 'Changes, availability, and support',
    body: (
      <>
        <p>
          We may add, change, or remove features at any time. We aim to keep the Services
          available but do not promise any particular uptime or response time, and the Services
          may be interrupted for maintenance, updates, or reasons outside our control. Features
          labeled beta, preview, or early access are provided as-is and may change or be removed
          at any time. Support is provided by email on a reasonable-efforts basis.
        </p>
      </>
    ),
  },
  {
    id: 'no-guarantee',
    title: 'No guarantee of results',
    body: (
      <>
        <p>
          Optimize reports, conversion figures, and statistical significance indicators are
          estimates based on the data collected and on statistical methods that have inherent
          uncertainty. They can be affected by ad blockers, browser privacy settings, consent
          choices, sample size, and other factors. We do not guarantee any increase in
          conversions, revenue, sign-ups, or members, or that any test result is correct. Business
          decisions you make based on the Services are your own.
        </p>
      </>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of warranties',
    body: (
      <>
        <p>
          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE FULLEST EXTENT PERMITTED BY
          LAW, 2N DIGITAL DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR
          OTHERWISE, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM A COURSE OF DEALING OR USAGE OF
          TRADE. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR
          ERROR-FREE, THAT DATA WILL NOT BE LOST OR CORRUPTED, OR THAT THE SERVICES WILL MEET YOUR
          REQUIREMENTS OR PRODUCE ANY PARTICULAR RESULT. YOU ARE RESPONSIBLE FOR KEEPING YOUR OWN
          COPIES OF IMPORTANT DATA.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE DRAGONDESK PARTIES (DEFINED
          IN SECTION 15) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
          EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, MEMBERS, CUSTOMERS,
          GOODWILL, OR DATA, OR FOR BUSINESS INTERRUPTION OR THE COST OF SUBSTITUTE SERVICES,
          ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, THE TOTAL AGGREGATE LIABILITY OF THE DRAGONDESK
          PARTIES FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES WILL
          NOT EXCEED THE GREATER OF (A) THE FEES YOU ACTUALLY PAID US FOR THE SERVICES IN THE 12
          MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS
          ($100).
        </p>
        <p>
          These limitations apply to every theory of liability, including contract, tort
          (including negligence), strict liability, and statute, and apply even if a limited
          remedy fails of its essential purpose. They are an essential part of the bargain between
          you and us, and our prices reflect them.
        </p>
      </>
    ),
  },
  {
    id: 'indemnity',
    title: 'Indemnification',
    body: (
      <>
        <p>
          You will defend, indemnify, and hold harmless the DragonDesk Parties from and against
          all claims, demands, suits, and proceedings brought by a third party (including your
          members, customers, website visitors, and any government authority), and all resulting
          losses, damages, liabilities, fines, penalties, settlements, costs, and expenses
          (including reasonable attorneys' fees), arising out of or relating to: (a) Customer
          Data; (b) your use of the Services, including experiences and messages you create or
          send; (c) your breach of these Terms; (d) your violation of any law or of any third
          party's rights; or (e) your dealings with your own members and customers, including
          payments, refunds, and chargebacks. We may choose to participate in the defense with
          counsel of our choosing at our own expense. You may not settle any claim that imposes an
          obligation on or admits fault by a DragonDesk Party without our prior written consent.
        </p>
      </>
    ),
  },
  {
    id: 'personal-liability',
    title: 'No personal liability of owners and personnel',
    body: (
      <>
        <p>
          "DragonDesk Parties" means 2N Digital LLC and its affiliates, and each of their current
          and former members, managers, owners, officers, employees, contractors, agents,
          successors, and assigns.
        </p>
        <p>
          The Services are provided solely by 2N Digital LLC, and 2N Digital LLC is the only party
          with obligations to you under these Terms. You agree that, to the fullest extent
          permitted by law, no member, manager, owner, officer, employee, contractor, or agent of
          2N Digital LLC will have any personal liability to you for any obligation of 2N Digital
          LLC or for any claim arising out of or relating to these Terms or the Services, and you
          will not bring any such claim against any of them in their individual capacity. Any
          claim must be brought only against 2N Digital LLC and is subject to Sections 13 and 16.
        </p>
        <p>
          Each DragonDesk Party is an intended third-party beneficiary of Sections 12 through 16
          and may enforce them directly.
        </p>
      </>
    ),
  },
  {
    id: 'disputes',
    title: 'Dispute resolution: arbitration and class action waiver',
    body: (
      <>
        <p>
          <strong>Informal resolution first.</strong> Before starting arbitration or any other
          proceeding, you agree to email a written description of the dispute and the relief you
          want to <Mail />, and to try in good faith to resolve it with us for at least 30 days.
        </p>
        <p>
          <strong>Binding arbitration.</strong> Except as stated below, any dispute, claim, or
          controversy arising out of or relating to these Terms or the Services, including their
          formation, interpretation, enforceability, or scope and whether a matter is subject to
          arbitration, will be resolved by final and binding arbitration administered by the
          American Arbitration Association ("AAA") under its Commercial Arbitration Rules. The
          arbitration will be decided by a single arbitrator and will take place in Pennsylvania,
          unless the parties agree to hold it by video or on written submissions. Judgment on the
          award may be entered in any court of competent jurisdiction. The Federal Arbitration
          Act governs this Section 16.
        </p>
        <p>
          <strong>Exceptions.</strong> Either party may (a) bring an individual claim in small
          claims court if it qualifies, and (b) seek a temporary restraining order, preliminary
          injunction, or other equitable relief in court to protect its intellectual property,
          confidential information, or systems, or to stop unauthorized use of the Services. We
          may also go to court to collect unpaid fees.
        </p>
        <p>
          <strong>Class action and jury trial waiver.</strong> YOU AND 2N DIGITAL EACH AGREE THAT
          CLAIMS MAY BE BROUGHT ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS
          MEMBER IN ANY CLASS, COLLECTIVE, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING. The
          arbitrator may not consolidate claims of more than one party or preside over any form of
          class or representative proceeding. TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AND 2N
          DIGITAL EACH WAIVE ANY RIGHT TO A TRIAL BY JURY. If this class action waiver is found
          unenforceable as to a particular claim, that claim (and only that claim) will be
          severed and decided in court under Section 17, and not in arbitration.
        </p>
        <p>
          <strong>Time limit.</strong> To the fullest extent permitted by law, any claim arising
          out of or relating to these Terms or the Services must be started within one year after
          the claim arises, or it is permanently barred.
        </p>
      </>
    ),
  },
  {
    id: 'law',
    title: 'Governing law and venue',
    body: (
      <>
        <p>
          These Terms and any dispute arising out of or relating to them or the Services are
          governed by the laws of the Commonwealth of Pennsylvania and applicable U.S. federal
          law, without regard to conflict-of-laws rules, wherever you are located. The United
          Nations Convention on Contracts for the International Sale of Goods does not apply.
          Subject to Section 16, you and we consent to the exclusive jurisdiction of, and venue in,
          the state and federal courts located in Pennsylvania, and waive any objection based on
          inconvenient forum.
        </p>
      </>
    ),
  },
  {
    id: 'international',
    title: 'Customers outside the United States',
    body: (
      <>
        <p>
          The Services are operated from the United States, and Customer Data is stored and
          processed in the United States. If you use the Services from outside the United States,
          you do so on your own initiative and are responsible for complying with local law,
          including any rules on transferring personal data to the United States and any
          data protection terms your law requires. Contact us at <Mail /> if you need data
          processing terms. You represent that you are not located in a country subject to U.S.
          embargo and are not on any U.S. government list of restricted parties, and you will not
          use the Services in violation of U.S. export control or sanctions laws.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these Terms',
    body: (
      <>
        <p>
          We may update these Terms from time to time. We will post the updated Terms on this page
          and change the effective date above. If a change is material, we will also give paying
          customers at least 30 days' notice by email before it takes effect. Your continued use
          of the Services after an update takes effect means you accept the updated Terms. If you
          do not agree, you must stop using the Services and cancel your subscription. Changes to
          Section 16 will not apply to any dispute you notified us of before the change was
          posted.
        </p>
      </>
    ),
  },
  {
    id: 'general',
    title: 'General terms',
    body: (
      <>
        <ul>
          <li>
            <strong>Entire agreement.</strong> These Terms, together with any order or checkout
            page you accept, are the entire agreement between you and us about the Services and
            replace any prior agreements or statements on the same subject, including statements
            on our website or in marketing materials. Any different or additional terms in your
            purchase orders or other documents are rejected.
          </li>
          <li>
            <strong>Electronic communications.</strong> You agree to receive notices and
            communications from us electronically, including by email to your account address and
            in the Services, and agree that these satisfy any requirement that they be in writing.
            Notices to us must be sent to <Mail />.
          </li>
          <li>
            <strong>Assignment.</strong> You may not assign or transfer these Terms without our
            prior written consent. We may assign these Terms without restriction, including in
            connection with a merger, acquisition, or sale of assets.
          </li>
          <li>
            <strong>Force majeure.</strong> We are not liable for any delay or failure caused by
            events beyond our reasonable control, including outages of hosting, network, or other
            third-party providers, cyberattacks, natural disasters, labor disputes, and government
            action.
          </li>
          <li>
            <strong>Severability and waiver.</strong> If any provision is held unenforceable, it
            will be enforced to the maximum extent permitted and the rest of these Terms remain in
            effect. Our failure to enforce a provision is not a waiver of our right to enforce it
            later.
          </li>
          <li>
            <strong>Relationship.</strong> The parties are independent contractors. Nothing in
            these Terms creates a partnership, joint venture, agency, or employment relationship.
          </li>
          <li>
            <strong>Survival.</strong> Sections 4 (as to amounts owed), 5, 6, and 9 through 20
            survive any termination or expiration of these Terms.
          </li>
          <li>
            <strong>Interpretation.</strong> Headings are for convenience only. "Including" means
            "including without limitation." If these Terms are translated, the English version
            controls.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <>
        <p>
          Questions about these Terms can be sent to 2N Digital LLC at <Mail />.
        </p>
      </>
    ),
  },
];

const Terms = () => (
  <div className="pricing-page">
    <section className="pricing-hero">
      <div className="container">
        <span className="section-label">Legal</span>
        <h1>Terms of Service</h1>
        <p>Effective {EFFECTIVE_DATE}</p>
      </div>
    </section>

    <section className="comparison-section">
      <div className="container legal">
        <nav className="legal-toc" aria-label="Contents">
          <ol>
            {sections.map(s => (
              <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
            ))}
          </ol>
        </nav>

        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="legal-section">
            <h2>{i + 1}. {s.title}</h2>
            {s.body}
          </section>
        ))}

        <p className="legal-footnote">
          Back to <Link to="/">DragonDesk</Link>
        </p>
      </div>
    </section>
  </div>
);

export default Terms;

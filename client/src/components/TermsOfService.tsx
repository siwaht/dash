import { X } from 'lucide-react';

interface TermsOfServiceProps {
    onClose: () => void;
}

export default function TermsOfService({ onClose }: TermsOfServiceProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-light-primary dark:bg-dark-primary border-2 border-brand-slate-light/30 dark:border-brand-slate/30 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-6 border-b-2 border-brand-slate-light/30 dark:border-brand-slate/30 bg-gradient-to-r from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-primary">
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-gradient">
                        Terms of Service
                    </h1>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-xl bg-light-secondary/50 dark:bg-dark-tertiary/50 hover:bg-gradient-to-br hover:from-brand-teal-mid/20 hover:to-brand-emerald-mid/20 border-2 border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-teal-mid flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 group"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5 text-text-light-secondary dark:text-text-dark-secondary group-hover:text-brand-teal-mid transition-colors" />
                    </button>
                </div>

                <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-text-light-secondary dark:text-text-dark-secondary">
                    <p className="text-sm">
                        <strong>Last Updated:</strong> November 20, 2025
                    </p>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            1. Agreement to Terms
                        </h2>
                        <p className="mb-3">
                            These Terms of Service ("Terms") constitute a legally binding agreement between you (either an individual or an entity, "you" or "Customer") and Agenticoslabs ("Agenticoslabs," "we," "us," or "our") governing your access to and use of the Agenticoslabs enterprise agentic AI platform and services available at agenticoslabs.com.
                        </p>
                        <p>
                            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            2. Description of Services
                        </h2>
                        <p className="mb-2">
                            Agenticoslabs provides a privacy-first, globally compliant enterprise agentic AI platform that includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                            <li><strong>AI Voice Agents:</strong> Intelligent voice calling agents for automated customer service and business communications</li>
                            <li><strong>AI Chat Agents:</strong> Conversational AI for real-time customer support and engagement</li>
                            <li><strong>AI Avatars:</strong> Visual AI representatives for enhanced digital interactions</li>
                            <li><strong>RAG Data Retrieval:</strong> Advanced Retrieval-Augmented Generation technology for intelligent information processing</li>
                            <li><strong>Workflow Automation:</strong> End-to-end process automation for business operations</li>
                            <li><strong>AI Advisory Services:</strong> Expert guidance for AI implementation and digital transformation</li>
                        </ul>
                        <p>
                            Our Services are designed for enterprise use and comply with HIPAA, GDPR, and other relevant regulatory standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            3. Account Registration and Security
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            3.1 Account Creation
                        </h3>
                        <p className="mb-3">
                            To access our Services, you must create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            3.2 Account Security
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                            <li>You must immediately notify us of any unauthorized use of your account</li>
                            <li>We recommend enabling multi-factor authentication (MFA) for enhanced security</li>
                            <li>You are solely responsible for maintaining the security of your login credentials</li>
                            <li>We reserve the right to disable accounts that violate these Terms or pose security risks</li>
                        </ul>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            3.3 Enterprise Requirements
                        </h3>
                        <p>
                            Our Services are intended for use by businesses and organizations. Users must be at least 18 years of age and authorized to bind their organization to these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            4. Acceptable Use Policy
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            4.1 Permitted Use
                        </h3>
                        <p className="mb-3">
                            You may use our Services only for lawful business purposes in compliance with these Terms and all applicable laws and regulations.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            4.2 Prohibited Activities
                        </h3>
                        <p className="mb-2">You agree not to:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                            <li>Use the Services for any illegal, harmful, or fraudulent purpose</li>
                            <li>Violate any applicable laws, regulations, or third-party rights</li>
                            <li>Attempt to gain unauthorized access to our systems or networks</li>
                            <li>Interfere with or disrupt the integrity or performance of the Services</li>
                            <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                            <li>Remove, alter, or obscure any proprietary notices from the Services</li>
                            <li>Use the Services to transmit viruses, malware, or other harmful code</li>
                            <li>Scrape, crawl, or use automated means to access the Services without permission</li>
                            <li>Resell, sublicense, or transfer your access to the Services without authorization</li>
                            <li>Use the Services to infringe upon intellectual property rights of others</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            5. Customer Data and Privacy
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            5.1 Your Data Ownership
                        </h3>
                        <p className="mb-3">
                            You retain all ownership rights to any data, content, or materials you upload, submit, or process through our Services ("Customer Data"). We claim no ownership over your Customer Data.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            5.2 Data Processing
                        </h3>
                        <p className="mb-3">
                            By using our Services, you grant us a limited license to process your Customer Data solely for the purpose of providing and improving the Services as described in our Privacy Policy.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            5.3 Critical Commitment
                        </h3>
                        <p className="font-semibold bg-light-secondary dark:bg-dark-secondary p-3 rounded-lg border-l-4 border-brand-teal-mid mb-3">
                            Your Customer Data is NEVER used to train AI models for other customers, is NEVER shared with third parties for marketing purposes, and is NEVER accessible to other organizations. Each customer's data remains completely isolated.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            5.4 Privacy Policy
                        </h3>
                        <p>
                            Our collection, use, and protection of your data is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            6. Intellectual Property Rights
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            6.1 Agenticoslabs Intellectual Property
                        </h3>
                        <p className="mb-3">
                            The Services, including all software, algorithms, designs, text, graphics, logos, and other content (excluding Customer Data), are owned by Agenticoslabs and protected by copyright, trademark, patent, and other intellectual property laws.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            6.2 Limited License
                        </h3>
                        <p className="mb-3">
                            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes during the term of your subscription.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            6.3 Feedback
                        </h3>
                        <p>
                            If you provide us with any suggestions, ideas, or feedback regarding the Services, we may use such feedback without any obligation to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            7. Service Availability and Support
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            7.1 Service Level Commitment
                        </h3>
                        <p className="mb-3">
                            We strive to provide 24/7 availability of our Services. However, we do not guarantee uninterrupted access and may perform scheduled maintenance or emergency repairs that temporarily affect availability.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            7.2 Service Modifications
                        </h3>
                        <p className="mb-3">
                            We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time. We will provide reasonable notice of material changes that negatively impact your use of the Services.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            7.3 Customer Support
                        </h3>
                        <p>
                            We provide customer support through email at cc@agenticoslabs.com. Enterprise customers may have access to additional support channels as specified in their service agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            8. Fees and Payment
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            8.1 Subscription Fees
                        </h3>
                        <p className="mb-3">
                            Access to certain features of our Services may require payment of subscription fees as specified in your service agreement or on our pricing page. All fees are non-refundable unless otherwise stated.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            8.2 Payment Terms
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                            <li>You agree to pay all fees associated with your subscription</li>
                            <li>Fees are billed in advance on a monthly or annual basis as selected</li>
                            <li>You authorize us to charge your payment method for all applicable fees</li>
                            <li>We may suspend or terminate access for non-payment</li>
                        </ul>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            8.3 Price Changes
                        </h3>
                        <p>
                            We reserve the right to change our pricing with 30 days' notice. Changes will apply to renewals following the notice period.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            9. Term and Termination
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            9.1 Term
                        </h3>
                        <p className="mb-3">
                            These Terms commence when you first access the Services and continue until terminated by either party as described below.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            9.2 Termination by You
                        </h3>
                        <p className="mb-3">
                            You may terminate your account at any time by contacting us at cc@agenticoslabs.com. Termination does not relieve you of any payment obligations for the current billing period.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            9.3 Termination by Us
                        </h3>
                        <p className="mb-2">We may suspend or terminate your access to the Services:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                            <li>If you violate these Terms or our Acceptable Use Policy</li>
                            <li>If your account poses a security risk</li>
                            <li>For non-payment of fees</li>
                            <li>If required by law or to protect our rights or those of others</li>
                            <li>If we discontinue the Services (with reasonable notice)</li>
                        </ul>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            9.4 Effect of Termination
                        </h3>
                        <p>
                            Upon termination, your access to the Services will cease. We will retain or delete your Customer Data in accordance with our Privacy Policy and data retention obligations. You may request export of your data within 30 days of termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            10. Warranties and Disclaimers
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            10.1 Our Warranties
                        </h3>
                        <p className="mb-3">
                            We warrant that we will provide the Services with reasonable skill and care in accordance with industry standards. We maintain appropriate security measures and comply with applicable data protection laws.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            10.2 Disclaimer
                        </h3>
                        <p className="mb-3 uppercase text-sm font-bold">
                            EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                        <p>
                            We do not warrant that the Services will be uninterrupted, error-free, or completely secure. You use the Services at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            11. Limitation of Liability
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            11.1 Liability Cap
                        </h3>
                        <p className="mb-3 uppercase text-sm font-bold">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AGENTICOSLABS' TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO AGENTICOSLABS DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            11.2 Exclusion of Damages
                        </h3>
                        <p className="mb-3 uppercase text-sm font-bold">
                            IN NO EVENT SHALL AGENTICOSLABS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            11.3 Exceptions
                        </h3>
                        <p>
                            Nothing in these Terms excludes or limits our liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability that cannot be excluded or limited by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            12. Indemnification
                        </h2>
                        <p>
                            You agree to indemnify, defend, and hold harmless Agenticoslabs and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) your Customer Data.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            13. Compliance and Regulatory
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            13.1 HIPAA Compliance
                        </h3>
                        <p className="mb-3">
                            For customers processing protected health information (PHI), we will enter into a Business Associate Agreement (BAA) as required under HIPAA. You are responsible for ensuring your use of the Services complies with HIPAA requirements.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            13.2 GDPR Compliance
                        </h3>
                        <p className="mb-3">
                            For customers subject to the General Data Protection Regulation (GDPR), we will process personal data in accordance with our Data Processing Addendum (DPA) and Privacy Policy.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            13.3 Customer Compliance
                        </h3>
                        <p>
                            You are solely responsible for ensuring that your use of the Services complies with all applicable laws, regulations, and industry standards relevant to your business and jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            14. Dispute Resolution
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            14.1 Informal Resolution
                        </h3>
                        <p className="mb-3">
                            Before pursuing formal dispute resolution, you agree to first contact us at cc@agenticoslabs.com to attempt to resolve any dispute informally.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            14.2 Governing Law
                        </h3>
                        <p className="mb-3">
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Agenticoslabs is registered, without regard to conflict of law principles.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            14.3 Arbitration
                        </h3>
                        <p>
                            Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the commercial arbitration rules of the applicable arbitration authority, except where prohibited by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            15. General Provisions
                        </h2>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            15.1 Changes to Terms
                        </h3>
                        <p className="mb-3">
                            We may update these Terms from time to time. We will notify you of material changes by email or through the Services. Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            15.2 Entire Agreement
                        </h3>
                        <p className="mb-3">
                            These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Agenticoslabs regarding the Services.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            15.3 Severability
                        </h3>
                        <p className="mb-3">
                            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            15.4 Waiver
                        </h3>
                        <p className="mb-3">
                            Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 mt-3">
                            15.5 Assignment
                        </h3>
                        <p>
                            You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                            16. Contact Information
                        </h2>
                        <p className="mb-3">
                            If you have questions about these Terms of Service, please contact us:
                        </p>
                        <div className="bg-light-secondary dark:bg-dark-secondary p-4 rounded-lg border-2 border-brand-slate-light/30 dark:border-brand-slate/30">
                            <p className="mb-2"><strong>Agenticoslabs Legal Team</strong></p>
                            <p className="mb-2">Email: cc@agenticoslabs.com</p>
                            <p>Website: https://agenticoslabs.com</p>
                        </div>
                    </section>

                    <section className="pt-6 border-t-2 border-brand-slate-light/30 dark:border-brand-slate/30">
                        <p className="text-sm italic">
                            By using Agenticoslabs' Services, you acknowledge that you have read, understood, and agree to be bound by this Terms of Service. These Terms form a binding legal agreement between you and Agenticoslabs.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

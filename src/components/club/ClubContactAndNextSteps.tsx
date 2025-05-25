import { motion } from "framer-motion";
import { ContactSection } from "../ui/contact-us";
import { MailCheck, HelpCircle, MessageCircle, Hand, Users } from "lucide-react";

const ClubAndNextSteps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-12"
      id="contact"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Join the Clann</h1>
        <div className="h-1 w-24 bg-accent rounded" />
      </div>

      {/* Hero */}
      <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2">
          Register your interest or find out more — join Clann today.
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-3xl leading-relaxed">
          Be part of something bigger—help shape the future for clubs and communities.
        </p>
        </div>


      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Info Column */}
        <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-primary h-fit">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-yellow-500" />
            How You Can Get Involved
          </h2>
          <p className="text-muted-foreground mb-6">
            Whether you have questions, feedback, or want to explore how this platform can support your club or organisation, we'd love to hear from you.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <HelpCircle className="w-5 h-5 text-green-600 dark:text-yellow-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary">Ask a Question</h4>
                <p className="text-muted-foreground">Need more information? We're happy to clarify.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MessageCircle className="w-5 h-5 text-green-600 dark:text-yellow-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary">Provide Feedback</h4>
                <p className="text-muted-foreground">Share your thoughts on how Clann can better support your club or organisation.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Hand className="w-5 h-5 text-green-600 dark:text-yellow-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary">Express Your Interest</h4>
                <p className="text-muted-foreground">If this aligns with your organisation, let us know how it could benefit your network of clubs.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-card px-6 py-4 rounded-lg shadow-md border border-border h-fit">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
            <MailCheck className="w-5 h-5 text-yellow-500" />
            Register Your Interest
          </h2>
          <div className="space-y-4">
            <ContactSection />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClubAndNextSteps;

import { motion } from "framer-motion";
import { ContactSection } from "../ui/contact-us";

const ClubAndNextSteps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-background space-y-10 text-foreground"
      id="contact"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Join the Clann</h1>
        <div className="h-1 w-24 bg-accent rounded" />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-accessible text-primary-foreground p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-primary-foreground/10 rounded-full -mt-20 -mr-20 z-0" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl font-bold">Register your interest or find out more — join Clann today.</h2>
          <p className="text-base text-primary-foreground/90">
            Be part of something bigger—help shape the future for Scottish grassroots football.
          </p>
        </div>
      </div>

      {/* Join Section Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Info Column */}
        <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-primary">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
            <i className="fas fa-users text-accent" />
            How You Can Get Involved
          </h2>
          <p className="text-muted-foreground mb-6">
            Whether you have questions, feedback, or want to explore how this platform can benefit your network, we'd love to hear from you.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <i className="fas fa-question-circle text-green-500 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary">Ask a Question</h4>
                <p className="text-muted-foreground">Need more information? We're happy to clarify.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <i className="fas fa-comment-dots text-green-500 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary">Provide Feedback</h4>
                <p className="text-muted-foreground">Share your thoughts on how Clann can better support Scottish football.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <i className="fas fa-hand-pointer text-green-500 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary">Express Your Interest</h4>
                <p className="text-muted-foreground">If this aligns with your organisation, let us know how it could benefit your network of clubs.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form from shared ContactSection component */}
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
            <i className="fas fa-paper-plane text-accent" />
            Register Your Interest
          </h2>
          <ContactSection />
        </div>
      </div>
    </motion.div>
  );
};

export default ClubAndNextSteps;

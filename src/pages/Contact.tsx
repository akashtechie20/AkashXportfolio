
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-portfolio-dark mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-portfolio-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-portfolio-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">akashbhardwaj794@gmail.com</p>
                <p className="text-gray-600">2203051050048@paruluniversity.ac.in</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-portfolio-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-portfolio-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 8488928367</p>
                <p className="text-gray-600">+91 8980397490</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-portfolio-gray rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-portfolio-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Parul University, Vadodara, Gujarat, India</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-portfolio-dark">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

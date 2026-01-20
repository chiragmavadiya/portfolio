import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import type { FC } from 'react'
import { useToast } from '../contexts/ToastContext'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ScrollAnimation from '../components/ScrollAnimation'

const Contact: FC = () => {
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const center: [number, number] = [21.5497436,70.4527113];

  // EmailJS Configuration
  // Get these values from https://www.emailjs.com/
  // Create a .env file in the root directory with these variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

  const validateForm = (): boolean => {
    const newErrors = {
      name: '',
      email: '',
    }

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    setErrors(newErrors)
    return !newErrors.name && !newErrors.email
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      showToast(
        'Email service is not configured. Please contact me directly at chiragmavadiya38@gmail.com',
        'error'
      )
      return
    }

    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'No Subject',
        message: formData.message,
        to_email: 'chiragmavadiya38@gmail.com',
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      showToast(
        'Message sent successfully! I will get back to you soon.',
        'success'
      )
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      showToast(
        'Failed to send message. Please try again later or contact me directly at chiragmavadiya38@gmail.com',
        'error'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <ScrollAnimation animation="fade-right">
            <div>
              <h2 className="section-title mb-8">Leave Us Your Info</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">
                  Your Full Name (Required)
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-[#F0F0F6] border-2 outline-none text-[#2B2B2B] ${
                    errors.name ? 'border-red-500' : 'border-[#2B2B2B]'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">
                  Your Email (Required)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-[#F0F0F6] border-2 outline-none text-[#2B2B2B] ${
                    errors.email ? 'border-red-500' : 'border-[#2B2B2B]'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-[#F0F0F6] border-2 border-[#2B2B2B] outline-none text-[#2B2B2B]"
                  placeholder="Enter subject (optional)"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-[#F0F0F6] border-2 border-[#2B2B2B] outline-none text-[#2B2B2B] resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary rounded-none ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            </div>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation animation="fade-left">
            <div>
              <h2 className="section-title mb-8">Contact Information</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="card bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/icons/location.svg" alt="location" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-y-2">
                      <span className="text-base font-medium text-[#2B2B2B]">Country:</span>
                      <span className="text-sm text-[#767676]">India</span>
                      <span className="text-base font-medium text-[#2B2B2B]">City:</span>
                      <span className="text-sm text-[#767676]">Junagadh</span>
                      <span className="text-base font-medium text-[#2B2B2B]">Street:</span>
                      <span className="text-sm text-[#767676]">Khamadrol Road</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/icons/email.svg" alt="email" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-y-2">
                      <span className="text-base font-medium text-[#2B2B2B]">Email:</span>
                      <span className="text-sm text-[#767676]">chiragmavadiya38@gmail.com</span>
                      <span className="text-base font-medium text-[#2B2B2B]">Skype:</span>
                      <span className="text-sm text-[#767676]">@chiragmavadiya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/icons/phone.svg" alt="phone" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-y-2">
                      <span className="text-base font-medium text-[#2B2B2B]">Personal:</span>
                      <span className="text-sm text-[#767676]">+91 81607 04401</span>
                      <span className="text-base font-medium text-[#2B2B2B]">Office:</span>
                      <span className="text-sm text-[#767676]">+91 81607 04401</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Map */}
        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="mb-16">
        <MapContainer
          // @ts-expect-error - Leaflet types are not compatible with React 19
          center={center}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


          <Marker position={center}>
            <Popup>You are here 📍</Popup>
          </Marker>
        </MapContainer>

          {/* <a href="https://www.google.com/maps/place/Ganga+Nagar+Rd,+Joshipura,+Junagadh,+Gujarat+362002/@21.5302808,70.4394589,15.33z/data=!4m6!3m5!1s0x3958021e7b9c5e8d:0xf36429c4e8c197d3!8m2!3d21.531114!4d70.4496952!16s%2Fg%2F11b6_c1wrz?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D" target="_blank" rel="noopener noreferrer">
            <img src="/images/junagadh.jpg" alt="Map" className="w-full h-80 object-contain" />
          </a> */}
          </div>
        </ScrollAnimation>

        {/* Footer Logos
        <div className="mb-8">
          <img
            src="/images/footer-logos.svg"
            alt="Partner Logos"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </section>
  )
}

export default Contact

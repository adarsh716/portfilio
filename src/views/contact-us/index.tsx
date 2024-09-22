import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore'; 
import {db} from '../../firebase/firebase'


const ContactContainer = styled.div`
  background-color: #0d101e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2rem;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  background: #1a1f2e;
  padding: 2rem;
  border-radius: 10px;
  animation: glow 2s alternate infinite;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px #5c06b3, 0 0 10px #5c06b3, 0 0 15px #5c06b3, 0 0 20px #5c06b3, 0 0 25px #5c06b3;
    }
    100% {
      box-shadow: 0 0 25px #5c06b3, 0 0 25px #5c06b3, 0 0 30px #5c06b3, 0 0 35px #5c06b3, 0 0 40px #5c06b3;
    }
  }
`;

const FormTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #a855f7;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a855f7;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 150px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a855f7;
  }
`;

const Label = styled(motion.label)`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  pointer-events: none;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background-color: #a855f7;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9333ea;
  }
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date(),
      });

      setIsSuccess(true);
      console.log('Message sent:', formData);
      
    } catch (error) {
      console.error('Error sending message: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </FormTitle>

        {['name', 'email', 'subject'].map((field) => (
          <InputGroup key={field}>
            <Input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              required
            />
            <Label
              animate={{
                top: formData[field as keyof typeof formData] ? '-0.5rem' : '0.75rem',
                fontSize: formData[field as keyof typeof formData] ? '0.75rem' : '1rem',
                color: formData[field as keyof typeof formData] ? '#a855f7' : 'rgba(255, 255, 255, 0.5)',
              }}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Label>
          </InputGroup>
        ))}

        <InputGroup>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Label
            animate={{
              top: formData.message ? '-0.5rem' : '0.75rem',
              fontSize: formData.message ? '0.75rem' : '1rem',
              color: formData.message ? '#a855f7' : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            Message
          </Label>
        </InputGroup>

        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>

        {isSuccess && <p style={{ textAlign: 'center', color: '#a855f7', fontWeight: 'bold',marginTop:'10px' }}>Message sent successfully!</p>}
      </StyledForm>
    </ContactContainer>
  );
};

export default ContactForm;

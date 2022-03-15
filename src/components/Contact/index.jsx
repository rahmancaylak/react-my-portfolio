import React, { useState } from 'react';
//Component
import { Button } from '../../styles/Button';
// FontAwesome Icons
import { FaPaperPlane } from 'react-icons/fa';
// Tailwind Styled Components
import {
  ContactSection,
  ContactContainer,
  ContactTitle,
  Form,
  FormGroup,
  InputGroup,
  Label,
  Input,
  TextArea,
  ButtonGroup,
} from '../../styles/Contact';
function Contact() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  return (
    <ContactSection id='contact'>
      <ContactContainer>
        <ContactTitle>İletişim</ContactTitle>
        <Form>
          <FormGroup>
            <InputGroup>
              <Label htmlFor='name'>Adınız</Label>
              <Input
                name='name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Rahman'
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor='surname'>Soyadınız</Label>
              <Input
                name='surname'
                id='surname'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder='Çaylak'
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='rahmancaylakk@gmail.com'
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor='topic'>Konu</Label>
              <Input
                type='topic'
                name='topic'
                id='topic'
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder='Konu...'
              />
            </InputGroup>
            <InputGroup className='col-span-2'>
              <Label htmlFor='message'>Mesajınız</Label>
              <TextArea
                name='message'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Gönder butonu çalışmamaktadır.'
              />
            </InputGroup>
          </FormGroup>
          <ButtonGroup>
            <Button
              className='flex items-center hover:opacity-80'
              $isActive={true}
            >
              Send <FaPaperPlane className='ml-1 inline' />
            </Button>
          </ButtonGroup>
        </Form>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;

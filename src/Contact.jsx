import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Fell free to conatct US</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.489451413816!2d77.30901507626159!3d28.585089975690668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f97fb7b77%3A0x57e50ec90fd80e55!2sNoida%20Sector-%2015%20Metro%20Station!5e0!3m2!1sen!2sin!4v1702618420536!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xjvnbbde" method='POST' className='contact-inputes'>
            <input
              type="text"
              name="username"
              placeholder='username'
              autoComplete='off'
              required
            />
            <input
              type="email"
              name="Email"
              placeholder='Email'
              autoComplete='off'
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete='off'
              required>
            </textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputes {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        inpu[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact
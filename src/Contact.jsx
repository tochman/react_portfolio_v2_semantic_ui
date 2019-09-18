import React from 'react'
import NetlifyForm from 'react-netlify-form'


const Contact = () => {
  return (
    <>

      <NetlifyForm name='Contact Form' className='ui form'>
        {({ loading, error, success }) => (
          <div className="ui main container">
            <h1 class="ui header">Would you like to get in touch?</h1>

            {loading &&
              <div>Loading...</div>
            }
            {error &&
              <div>Your information was not sent. Please try again later.</div>
            }
            {success &&
              <div>Thank you for contacting us!</div>
            }
            {!loading && !success &&
              <form  className='ui form'>
                <div className="field">
                  <label>First Name</label>
                  <input type='text' name='Name' required />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea name='Message' required />
                </div>
                <div>

                  <button className="ui submit button">Submit</button>
                </div>
              </form>

            }
          </div>
        )}
      </NetlifyForm>
    </>
  )
}

export default Contact

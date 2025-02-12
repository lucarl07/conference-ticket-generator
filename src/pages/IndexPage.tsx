import { Form } from 'react-router-dom'
import Control from 'components/Control'
import SubmitBtn from 'components/SubmitBtn'

export default function IndexPage() {
  return (
    <Form method="POST" action="/">
      <Control.Root label="Avatar">
        <Control.FileInput
          name="avatar"
          message="Upload your photo (JPG or PNG, max size: 500KB)." />
      </Control.Root>
      <Control.Root label="Full Name">
        <Control.Input name="name" />
      </Control.Root>
      <Control.Root label="Email Address" error="">
        <Control.Input 
          name="email"
          placeholder="example@email.com" />
      </Control.Root>
      <Control.Root label="GitHub Username" error="">
        <Control.Input 
          name="github"
          placeholder="@yourusername" />
      </Control.Root>
      <SubmitBtn>Generate My Ticket</SubmitBtn>
    </Form>
  );
}
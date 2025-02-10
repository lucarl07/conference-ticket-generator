import FullLogo from 'components/FullLogo'
import HeadingGroup from 'components/HeadingGroup'
import Form from 'components/Form'
import Control from 'components/Control'
import SubmitBtn from 'components/SubmitBtn'

export default function IndexPage() {
  return (
    <>
      <header>
        <FullLogo />
      </header>
      <main>
        <HeadingGroup 
          title="Your journey to Coding Conf 2025 starts here!"
          subtitle="Secure your spot at next year's biggest coding conference." />
        <Form>
          <Control.Root label="Avatar">
            <Control.FileInput message="Upload your photo (JPG or PNG, max size: 500KB)." />
          </Control.Root>
          <Control.Root label="Full Name">
            <Control.Input />
          </Control.Root>
          <Control.Root label="Email Address" error="">
            <Control.Input placeholder="example@email.com" />
          </Control.Root>
          <Control.Root label="GitHub Username" error="">
            <Control.Input placeholder="@yourusername" />
          </Control.Root>
          <SubmitBtn>Generate My Ticket</SubmitBtn>
        </Form>
      </main>
    </>
  );
}
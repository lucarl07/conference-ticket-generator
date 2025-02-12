import FullLogo from 'components/FullLogo'
import Heading from 'components/Heading'
import { Outlet } from 'react-router-dom';

export default function AppView() {
  return (
    <>
      <header>
        <FullLogo />
        <Heading.Group>
          <Heading.Title>
            Your journey to Coding Conf 2025 starts here!
          </Heading.Title>
          <Heading.Subtitle>
            Secure your spot at next year's biggest coding conference.
          </Heading.Subtitle>
        </Heading.Group>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
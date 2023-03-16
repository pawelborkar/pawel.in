import { Card, Grid, Text } from '@geist-ui/core';
import { ImTwitter } from 'react-icons/im';
import { RxExternalLink } from 'react-icons/rx';
const Footer = () => {
  return (
    <Card type='dark' hoverable width={8} height={3}>
      <ImTwitter />
      <> Twitter </>
      <RxExternalLink />
    </Card>
  );
};

export default Footer;

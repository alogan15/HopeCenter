import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Sidebar from './Sidebar';


const sections = [
  { title: '', url: '#' },
  { title: 'Services', url: '#' },
  { title: 'How Can You Help', url: '#' },
  { title: 'Send A Donation', url: '#' },
  { title: 'Become A Volunteer', url: '#' },
  { title: 'Donate Clothing', url: '#' },
  { title: 'Other Donations', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
];

const mainFeaturedPost = {
  title: 'Our Mission',
  description:
    "Welcome to the New Castle County Hope Center, Inc. is to provide financial support to the New Castle County Hope Center. The Hope Center’s mission is to house and support individuals & families experiencing homelessness during the Covid-19 pandemic. The Hope Center operates by referrals only. We do not take walk ins. The Hope Center receives referrals from the Division of State Service Centers. Someone experiencing homelessness would call or text Centralized Intake: 1-833-FIND-BED (833-346-3233) or email: intake@housingalliancede.org.",
  image: 'https://www.newcastlede.gov/ImageRepository/Document?documentID=46217',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Inventory',
    date: '',
    description:
      '',
    image: 'https://uwde.org/wp-content/uploads/2021/10/51557984854_c58b16a8e2_k-1024x683.jpg',
    imageLabel: 'Inventory',
    url:''
  },
  {
    title: 'Incoming Donations',
    date: '',
    description:
      '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k6hVBgDCte1jibK8DR1z0H-FaqcxlqPymBpXAi0j_tbZQuToGMRt0_H96jQ-ZSLF9d8&usqp=CAU',
    imageLabel: 'Donations',
  },
  {
    title: 'Participant Request',
    date: '',
    description:
      '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0Hlm2EBWhn0ZC9AlSU2l7aUx7Xlbry2wBd_HtqC_IlnV7VYRMflSAVoetrsOwglwAzQ&usqp=CAU',
    imageLabel: 'Participant',
  },
];

const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'DCHV', icon: GitHubIcon },
      { name: 'HHM', icon: TwitterIcon },
      { name: 'FaithfulFriends', icon: FacebookIcon },
      { name: 'Grace Transportation Services', icon: GitHubIcon },
      { name: 'Delaware Health & Social Services', icon: TwitterIcon },
      { name: 'Family Promise', icon: FacebookIcon },
      { name: 'HELP is here', icon: GitHubIcon },
      { name: 'Pe', icon: TwitterIcon },
      { name: 'FaithfulFriends', icon: FacebookIcon },
    ],
  };


const theme = createTheme({
    typography:{
        allVariants: {
            fontFamily: 'serif',
            // color:'blue'
        }
    }
  });



export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="NCC Hope Center" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="NCC Hope Center"
        description=""
      />
    </ThemeProvider>
  );
}
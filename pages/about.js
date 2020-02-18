import Layout from '../components/MyLayout'

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
      <style jsx>{`
        p {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>
  );
}

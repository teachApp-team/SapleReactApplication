import Link from 'next/link';
import style from '../static/Style';
import Layout from '../components/Layout';
import Top from '../components/Top';
import Graph from '../components/Graph';

export default () => (
  <Layout header ="Next" title ="User page.">
    <div>
      <Graph />
      <Link href="./other">
        <button>
          go to other &gt;&gt;
        </button>
      </Link>
    </div>
  </Layout>
);

import Link from 'next/link';
import style from '../static/Style';
import Layout from '../components/Layout';
import Test from '../components/Test';

export default () => (
  <Layout header ="Next" title ="Top page.">
    <div>
      <Test />
      <hr/>
      <Link href="./other">
        <button>
          go to other &gt;&gt;
        </button>
      </Link>
    </div>
  </Layout>
);

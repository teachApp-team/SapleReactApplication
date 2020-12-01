import Link from 'next/link';
import style from '../static/Style';
import Layout from '../components/Layout';
import Top from '../components/Top';

export default () => (
  <Layout header ="Other" title ="other page.">
    <hr/>
    <div>
      <Top />
      <Link href="/">
        <button>
          &gt;&gt;Back to Top
        </button>
      </Link>
      <Link href="./user">
        <button>
          go to user &gt;&gt;
        </button>
      </Link>
    </div>
  </Layout>
);

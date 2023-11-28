import Head from './Head';
import Menu from './Menu';
import Example from './Example';
import SmallBanner from './SmallBanner';
import Danhmuc from '../SANPHAM/Danhmuc';
import Footer from './Footer';
import Dichvu from './DichVu';
function TrangChu()
{
    return(
        <>
        <Head/>
        <Menu/>
        <div className='Hbanner'>
            <Example />
        </div>
        <div className='SmallBanner'>
            <SmallBanner/>
        </div>   

      <Danhmuc/>
      <Dichvu/>
      <Footer/>
        </>
    );
}
export default TrangChu;
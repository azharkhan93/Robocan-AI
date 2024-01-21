/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// pages/index.tsx
import React from 'react';
import Image from 'next/image';

const HowItWorks: React.FC = () => {
  const containerStyle = {
    backgroundImage: 'url("/how.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="" style={containerStyle}>
      <div className="h-[500px] flex items-center justify-center relative">
        <div className="text-center text-white absolute top-11">
          
          <h2 className="text-3xl font-bold mb-4 text-gray-950">How It Works</h2>

          
          <p className="text-ray mb-8 mx-auto max-w-3xl">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 mt-40">

      <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center bg-white  h-[200px] rounded-2xl w-[300px]">
      <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" rx="30" fill="#FDEFEF"/>
  <path d="M35.5263 19.7368L40.2632 15M40.2632 15L45 19.7368M40.2632 15V24.4737M30 16.5789H22.5789C19.9261 16.5789 18.5996 16.5789 17.5864 17.0952C16.6951 17.5494 15.9704 18.274 15.5163 19.1653C15 20.1786 15 21.505 15 24.1579V37.4211C15 40.0739 15 41.4004 15.5163 42.4136C15.9704 43.3049 16.6951 44.0296 17.5864 44.4837C18.5996 45 19.9261 45 22.5789 45H37.1053C38.5736 45 39.3078 45 39.9102 44.8386C41.5448 44.4006 42.8216 43.1238 43.2596 41.4891C43.4211 40.8868 43.4211 40.1526 43.4211 38.6842M26.8421 25.2632C26.8421 27.0072 25.4283 28.4211 23.6842 28.4211C21.9402 28.4211 20.5263 27.0072 20.5263 25.2632C20.5263 23.5191 21.9402 22.1053 23.6842 22.1053C25.4283 22.1053 26.8421 23.5191 26.8421 25.2632ZM33.9316 30.6602L20.5755 42.8022C19.8243 43.4851 19.4486 43.8266 19.4154 44.1224C19.3866 44.3788 19.4849 44.6331 19.6787 44.8035C19.9023 45 20.4099 45 21.4252 45H36.2463C38.5187 45 39.6548 45 40.5472 44.6183C41.6675 44.139 42.5601 43.2465 43.0393 42.1262C43.4211 41.2338 43.4211 40.0976 43.4211 37.8252C43.4211 37.0607 43.4211 36.6784 43.3375 36.3223C43.2324 35.8749 43.031 35.4558 42.7472 35.0943C42.5215 34.8066 42.2229 34.5678 41.6259 34.0902L37.2092 30.5568C36.6117 30.0788 36.3129 29.8398 35.9839 29.7554C35.6939 29.6811 35.3887 29.6907 35.104 29.7832C34.781 29.8881 34.4978 30.1455 33.9316 30.6602Z" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       

          <h2 className="text-xl font-bold mb-4 text-gray-900 mt-4 ">Upload Image</h2>
          <p className="text-gray-600 text-center text-sm mb-6 mx-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
        </div>
        <div className="flex items-center justify-center">
              <svg width="159" height="24" viewBox="0 0 159 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.46054 14.237C68.5527 44.0806 72.1747 -21.8182 156.79 12.8727" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="12 12"/>
              </svg>
            </div>
        <div className="flex flex-col items-center justify-center bg-white h-[200px] rounded-2xl w-[300px]">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" rx="30" fill="#FDEFEF"/>
  <path d="M38.0073 23.0852C38.5801 22.422 39.1725 21.7362 39.4637 20.8929C39.4863 20.8276 39.4979 20.7586 39.4979 20.689C39.4979 19.6301 38.9392 18.7666 38.0745 18.4875C37.3515 18.2561 36.2682 18.4399 35.3943 19.6545C35.3796 19.6759 35.3656 19.6979 35.3528 19.7211C35.3339 19.7565 33.5158 23.0259 31.0368 22.542C31.3247 20.933 31.5166 17.3255 30.978 16.0052C30.8046 15.5857 30.487 15.2809 30.059 15.1234C28.848 14.6758 27.0282 15.582 26.8249 15.687C26.5916 15.8067 26.4579 16.0595 26.4902 16.3197C26.4927 16.3412 26.697 18.076 26.3351 19.5812L24.6955 17.2094C24.5887 17.0549 24.4183 16.9566 24.2308 16.9413C22.0715 16.7789 20.8367 18.5852 20.4844 19.5696C20.4105 19.7748 20.4496 20.0044 20.587 20.1742C21.2558 20.9995 22.8993 23.3133 23.1319 24.8303C21.366 25.8547 19.8815 27.6118 20.0075 30.6513C20.2853 37.3631 28.7369 44.371 29.0966 44.666C29.1521 44.7118 29.2156 44.7478 29.284 44.7716C29.3036 44.7789 29.9612 45 30.9456 45C32.926 45 36.2303 44.1048 38.3291 38.7706C40.1898 34.0368 39.8308 29.9997 37.2611 26.7718C36.7457 26.1257 36.6382 25.2518 36.979 24.4922C37.1835 24.0397 37.5835 23.5762 38.0073 23.0852ZM27.772 16.6268C28.3992 16.3661 29.2199 16.1469 29.6278 16.2971C29.728 16.3343 29.7823 16.3856 29.8208 16.4797C30.3055 17.6675 29.9621 22.1231 29.7197 22.722L29.2199 23.7594C28.7912 23.4895 28.2374 23.3972 27.5363 23.4754C27.4105 23.4893 27.2719 23.5074 27.1296 23.5274V21.0718C27.8673 19.5739 27.8325 17.5318 27.772 16.6268ZM21.7985 19.6918C22.0593 19.1922 22.7035 18.2378 23.8485 18.1834L25.879 21.1199V23.7634C25.3716 23.8843 24.8313 24.05 24.2897 24.2669C23.8615 22.5119 22.4053 20.4819 21.7985 19.6918ZM36.2828 27.551C38.5539 30.404 38.8506 34.0252 37.1652 38.3126C34.6603 44.68 30.5023 43.822 29.7988 43.6223C28.8883 42.8505 21.4975 36.4074 21.2569 30.6C21.1537 28.1091 22.3833 26.6568 23.9201 25.8092C24.0375 25.7831 24.1461 25.7349 24.2286 25.6527C25.3825 25.0882 26.6638 24.8297 27.6731 24.7187C28.4914 24.629 28.6654 24.8402 28.823 25.1492C28.8554 25.2129 28.9003 25.2664 28.9502 25.3143C28.9555 25.3193 28.9573 25.3263 28.9628 25.3312C31.5813 27.6792 32.3715 30.8827 31.3108 34.8526C31.2668 35.0157 31.2357 35.1366 31.2229 35.2099C31.1606 35.5494 31.3859 35.8749 31.7261 35.9366C31.7639 35.9439 31.8012 35.9469 31.8384 35.9469C32.1346 35.9469 32.3984 35.7357 32.4527 35.4334C32.4625 35.3809 32.4869 35.2935 32.5187 35.1757C33.6638 30.8912 32.8598 27.3812 30.1407 24.7286L30.432 24.1243C30.4342 24.1202 30.4378 24.1171 30.44 24.1129C30.4956 24.015 30.5615 23.8862 30.6339 23.7348C31.3179 23.8999 31.9698 23.8668 32.5761 23.7V24.8525C32.5761 25.1981 32.8558 25.4778 33.2014 25.4778C33.5471 25.4778 33.8267 25.1981 33.8267 24.8525V23.1457C35.0289 22.4064 35.9491 21.2283 36.4312 20.3555C36.8306 19.8151 37.313 19.5562 37.691 19.6783C38.0055 19.7797 38.2162 20.1302 38.2443 20.5852C38.0128 21.1653 37.5298 21.7253 37.0608 22.2681C36.5979 22.8043 36.1185 23.3594 35.8389 23.9786C35.3045 25.1688 35.4749 26.5379 36.2828 27.551Z" fill="#F5756B" stroke="#F5756B" stroke-width="0.5"/>
</svg>



          <h2 className="text-xl font-bold mb-2 text-gray-900 mt-4" >Select Organ
 </h2>
          <p className="text-gray-600 text-center text-sm mb-6 mx-2">
          
It is a long established fact that a reader will be distracted
          </p>
        </div>
        <div className="flex items-center justify-center">
              <svg width="159" height="24" viewBox="0 0 159 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.46054 14.237C68.5527 44.0806 72.1747 -21.8182 156.79 12.8727" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="12 12"/>
              </svg>
            </div>

        

        <div className="flex flex-col items-center justify-center bg-white  h-[200px] rounded-2xl w-[300px]">
          <div className=' mb-4'>
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" rx="30" fill="#FDEFEF"/>
  <path d="M30 15V45M40.6066 19.3934L19.3934 40.6066M45 30H15M40.6066 40.6066L19.3934 19.3934" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

          
          <h2 className="text-xl font-bold mb-2 text-gray-900 ">Receive Prediction</h2>
          <p className="text-gray-600 text-center text-sm mb-6 ">
            There are many variations of passages of Lorem Ipsum available
          </p>
        </div>
      </div>
    </div>
        
      </div>
      </div>
    
  );
};

export default HowItWorks;






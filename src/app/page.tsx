"use client"
import { faBell, faHouse, faMagnifyingGlass, faUser, faArrowRightFromBracket, faSquarePollHorizontal, faEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  const RecentTransactionCardItems = [
    { date: "2056-03-23", info: "Withdrawal Transfer to Bank-XXX11" },
    { date: "2056-03-27", info: "Withdrawal Transfer to Bank-XXX11" },
    { date: "2056-08-23", info: "Withdrawal Transfer to Bank-XXX11" },
  ]
  const TodayActivityCardItems = [
    { amount: "$9,800", info: "Year-to-Date Contributions" },
    { amount: "$1,800", info: "Total Interest" },
  ]
  const SecondDivCardItem = [
    { numeric: "$30,234", info: "My Goal" },
    { numeric: "59%", info: "Goal Achieved" },
    { numeric: "$300", info: "Est Monthly Income" }
  ]
  const ThirdDivCardItem = [
    "Age: Under 30",
    "Salary:K 20-K 30",
    "Gender:Male"
  ]
  const RecentTransactionCard = ({ item }) => {
    return (
      <div className='h-[max-content] w-[90%]  py-4 border-b-2 border-inherit'>
        <p className='font-semibold text-[10px] opacity-25 mb-1'>{item.date}</p>
        <p className='font-bold text-[10px] opacity-75 '>{item.info}</p>
      </div>
    )
  }
  const TodayActivityCard = ({ item }) => {
    return (
      <div className='h-[max-content] w-[max-content] flex flex-col mt-2 '>
        <p className='font-bold text-[12px]'>{item.amount}</p>
        <p className='font-semibold text-[10px] opacity-25'>{item.info}</p>
      </div>
    )
  }
  const SecondDivCard = ({ item }) => {
    return (
      <div className='h-[max-content] w-[170px] py-2 pr-4 flex flex-col  justify-center   border-b-2 border-[darkblue]'>
        <p className='text-[22px] font-semibold'>{item.numeric}</p>
        <p className='text-[12px] font-semibold text-[grey] opacity-75'>{item.info}</p>
      </div>
    )
  }
  const ThirdDivCard = ({ item }) => {
    return (
      <div className='flex flex-row  gap-2 py-2  border-b-2 border-[lightgray]'>
        <p className='text-[12px] font-semibold'>{item}</p>
        <FontAwesomeIcon icon={faCaretDown} className='h-[16px] w-[16px] text-[gray]' />
      </div>
    )
  }
  const SliderValue = [
    "Employee Contribution",
    "Retirement Age ",
  ]
  const Slider = ({ item }) => {
    const [sliderValue, setSliderValue] = useState('55')
    const handleSlider = (e) => {
      setSliderValue(e.target.value)
    }
    return (<>
      <p className='text-[12px] font-semibold'>{item}</p>
      <div className='flex items-center '>
        <div className='h-[40px] w-[80%]  flex justify-center items-center'>
          <input
            className='h-[20px] w-[100%]'
            type='range' min={0} max={100} value={sliderValue} onChange={handleSlider}
          />
        </div>
        <div className='h-[max-content] p-1.5 rounded ml-2 w-[max-content] bg-[#fff] flex justify-center items-center'>
          <p className='text-[10px] font-semibold'>{sliderValue}%</p>
        </div>
      </div>
    </>
    )
  }

  return (
    <div className='h-screen w-[100%] bg-[lightgrey] flex justify-center items-center'>
      <div className='h-[100%] w-[100%]  flex justify-center '>
        <div className='h-[100%] w-[60px] bg-[#fafafa] flex flex-col '>
          <div className='h-[20%] w-[100%]  flex flex-col justify-center items-center gap-[30px] cursor-pointer font-bold'>
            <div className='h-[35px] w-[35px]'>
              <img src='/butterfly.png' />
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='h-[18px] w-[18px] text-[gray]' />
          </div>
          <div className='h-[50%] w-[100%]  flex flex-col justify-start items-center pt-[20px] gap-[30px] cursor-pointer'>
            <FontAwesomeIcon icon={faHouse} className='h-[18px] w-[18px] text-[gray]' />
            <FontAwesomeIcon icon={faEnvelope} className='h-[18px] w-[18px] text-[gray]' />
            <FontAwesomeIcon icon={faSquarePollHorizontal} className='h-[18px] w-[18px] text-[gray]' />
            <FontAwesomeIcon icon={faUser} className='h-[18px] w-[18px] text-[gray]' />
          </div>
          <div className='h-[30%] w-[100%]  flex flex-col justify-end items-center  gap-[30px] pb-[50px] cursor-pointer'>
            <FontAwesomeIcon icon={faBell} className='h-[18px] w-[18px] text-[gray]' />
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='h-[18px] w-[18px] text-[gray]' />
          </div>
        </div>
        <div className='h-[100%] w-[20%] bg-[#f4f4f5] flex justify-center items-center'>
          <div className='h-[100%] w-[70%]  '>
            <div className='h-[140px] w-[100%] flex gap-[15px] items-center'>
              <div className='h-[70px] w-[70px] rounded-full bg-[red] overflow-hidden'>
                <img
                  src='/profile.jpg'
                  className='h-[100%] w-[100%]'
                />
              </div>
              <div>
                <p className='text-[22px] font-semibold'>Hi Mike,</p>
                <p className='text-[10px] '>welcome back.</p>
              </div>
            </div>
            <div>
              <p className='font-bold text-[14px] mb-2'>Today</p>
              <p className='font-semibold text-[20px]'>$19,876</p>
              <p className='font-semibold text-[10px] opacity-25'>Account Balance</p>
              {
                TodayActivityCardItems.map((item, index) => {
                  return <TodayActivityCard item={item} id={index} />
                })
              }
              <div className='h-[40px] w-[120px] bg-[blue] flex items-center justify-center rounded-lg opacity-60 mt-2'>
                <p className='text-[13px] font-semibold mr-2 text-[#fff]'>I want to</p>
                <FontAwesomeIcon icon={faCaretDown} className='h-[12px] w-[12px] text-[#fff]' />
              </div>
            </div>
            <div className=' mt-8'>
              <p className='text-[14px] font-semibold'>Recent Transactions</p>
              {
                RecentTransactionCardItems.map((item, index) => {
                  return <RecentTransactionCard item={item} id={index} />
                })
              }
            </div>
          </div>
        </div>
        <div className='h-[100%] w-[58%] bg-[#fafafa] flex flex-col items-center'>
          <div className='h-[100%] w-[80%]'>
            <div className='h-[100px] mt-6 w-[100%] flex  justify-center flex-col '>
              <p className='text-[12px] text-[blue] font-bold'>Retirement Income</p>
              <p className=' text-[18px] font-semibold'>Starting Year 2056</p>
            </div>
            <div className='h-[100px] w-[100%]  flex justify-between'>
              {
                SecondDivCardItem.map((item, index) => {
                  return <SecondDivCard item={item} id={index} />
                })
              }

            </div>
            <p className='text-[15px] text-[darkblue] font-bold'>Contributions Overtime</p>
            <div className='h-[200px] w-[100%] bg-[black] object-fill mt-2'>
              <img
                src='/chart.png'
                className='h-[100%] w-[100%]'
              />
            </div>
            <p className='text-[14px] font-bold mt-4 '>How do I compare to my peers?</p>
            <p className='text-[10px] font-semibold opacity-50'>These number represent current goals achievement.</p>
            <div className='h-[150px] w-[100%] mt-4 flex justify-between'>
              <div className='h-[150px] w-[27%] flex flex-col'>
                {
                  ThirdDivCardItem.map((item, index) => {
                    return <ThirdDivCard item={item} id={index}
                    />
                  })
                }
              </div>
              <div className='h-[150px] w-[70%] object-fill'>
                <img
                  src='/loading.jpg'
                  className='h-[100%] w-[100%]'
                />

              </div>
            </div>
          </div>
        </div>
        <div className='h-[100%] w-[27%] bg-[#fafafa] gap-8 flex pt-10 flex-col'>
          <div className='h-[53%] w-[75%] bg-[#f4f4f5]  rounded flex items-center justify-center'>
            <div className='h-[90%] w-[80%]'>
              <div className='h-[max-content] mb-4  w-[100%]'>
                <p className='text-[16px] font-semibold'>Retirement Strategy</p>
                <div className='h-[max-content] w-[100%] py-2 border-lightgrey border-b-2 '>
                  {
                    SliderValue.map((item, index) => {
                      return (<Slider item={item} key={index} />)
                    })
                  }
                </div>
              </div>
              <div className=' flex flex-col gap-3 items-center'>
                <div className='w-[100%] gap-2 flex flex-col'>
                  <div className='flex items-center justify-between'>
                    <p className='text-[12px] font-semibold'>Employment Opportunities</p>
                    <p className='text-[12px] font-semibold'>8.4%</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='text-[12px] font-semibold'>Interest Rate</p>
                    <p className='text-[12px] font-semibold'>6%</p>
                  </div>
                </div>
                <div className='h-[40px] w-[90%] flex justify-center items-center rounded bg-[blue] cursor-pointer opacity-60'><p className='text-[13px] text-[#fff] font-semibold'>Update</p></div>
                <p className='text-[12px] font-semibold mt-1 text-[blue]'>View Help Docs!</p>
              </div>
            </div>
          </div>
          <div className='h-[200px] w-[75%]  flex justify-center'>
            <div className='w-[100%] h-[max-content] pl-6 border-[#4f46e5] border-l-2 flex flex-col'>
              <p className='text-[15px]  font-medium'>Are you considering a </p>
              <p className='text-[13px] font-bold'>Housing Advance?</p>
              <p className='text-[11px] opacity-50 font-semibold'>Limited time reduced interest</p>
              <p className='text-[10px] text-[blue] font-bold mt-2'>Learn More!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

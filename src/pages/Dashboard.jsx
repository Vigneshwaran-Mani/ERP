import React from 'react';
import { GoPackage } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {earningData, weeklyStats, SparklineAreaData, ecomPieChartData, dropdownData} from '../data/data';
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';
import Pie from '../components/Charts/Pie';
import LineChart from '../components/Charts/LineChart';


const DropDown = () => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
);

const Dashboard = () => {

    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className="flex m-3 flex-wrap justify-center gap-6 items-center">
                    {earningData.map((item) => (
                        <div key={item.title} className="bg-white h-44 md:w-56  p-4 pt-9 rounded-2xl shadow-2xl">
                            <button
                                type="button"
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">{item.amount}</span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            

            <div className="flex gap-10 m-4 flex-wrap justify-center">
                <div className="bg-white p-6 rounded-2xl w-96 md:w-760 shadow-2xl">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Sales Overview</p>
                        <DropDown currentMode="#03C9D7" />
                    </div>
                    <div className="md:w-full overflow-auto">
                        <LineChart />
                    </div>
                </div>
                <div className="md:w-400 bg-white rounded-2xl p-6 m-3 shadow-2xl">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Weekly Stats</p>
                        <button type="button" className="text-xl font-semibold text-gray-500">
                            <IoIosMore />
                        </button>
                    </div>

                    <div className="mt-10 ">
                        {weeklyStats.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4 w-full">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{ background: item.iconBg }}
                                        className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>

                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                        <div className="mt-4">
                            <SparkLine currentColor="#03C9D7" id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-1 flex-wrap justify-center">
                <div className="bg-white m-3 p-4 rounded-2xl md:w-780 shadow-2xl">
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span>
                                    <GoPackage />
                                </span>
                                <span>Expense</span>
                            </p>
                            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                <span>
                                    <GoPackage />
                                </span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div className=" border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                    <span className="text-3xl font-semibold">$93,438</span>
                                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                        23%
                                    </span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p className="text-3xl font-semibold">$48,487</p>

                                <p className="text-gray-500 mt-1">Expense</p>
                            </div>

                            <div className="mt-5">
                                <SparkLine currentColor="#03C9D7" id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color="#03C9D7" />
                            </div>
                        </div>
                        <div>
                            <Stacked currentMode="#03C9D7" width="320px" height="360px" />
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className=" rounded-2xl md:w-400 p-4 m-3 shadow-2xl"
                        style={{ backgroundColor: "#fff" }}
                    >
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-2xl">Earnings</p>

                            <div>
                                <p className="text-2xl font-semibold mt-8">$63,448.78</p>
                                <p className="text-gray-400">Monthly revenue</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <SparkLine currentColor="#03C9D7" id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10 shadow-2xl">
                        <div>
                            <p className="text-2xl font-semibold ">$43,246</p>
                            <p className="text-gray-400">Yearly sales</p>
                        </div>

                        <div className="w-40">
                            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
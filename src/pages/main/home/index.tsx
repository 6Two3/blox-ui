import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Home() {
    return (
        <ScrollArea className="h-[calc(100vh-90px)]">
            <div className="flex flex-col items-stretch gap-8 p-12 w-full">
                <div className="flex flex-col items-stretch gap-6">
                    <span className="text-2xl font-semibold text-gray300 capitalize">Blox Crates</span>
                    <div className='flex flex-row justify-between'>
                        <div className="relative">
                            <span className="absolute left-4 top-0 flex h-full items-center justify-center text-gray500">
                                <Search />
                            </span>
                            <Input
                                type="text"
                                className="border border-[#232833] text-white placeholder:text-gray-700"
                            />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Select>
                                <SelectTrigger className="w-[180px] py-6">
                                    <SelectValue placeholder="Price pending" className='text-white' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="pending" className='flex flex-row'>Price pending</SelectItem>
                                        <SelectItem value="banana">Price pending</SelectItem>
                                        <SelectItem value="blueberry">Price pending</SelectItem>
                                        <SelectItem value="grapes">Price pending</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px] py-6">
                                    <SelectValue placeholder="All" className='text-white' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple" className='flex flex-row'>Half</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='grid grid-cols-5 gap-4'>
                            {Array.from({ length: 30 }).map((_, index) => (
                                <div key={index} className='flex flex-col items-center gap-4 bg-dark-gray1 rounded-md p-4'>
                                    <img src='/assets/icons/mine.png' alt='mine' />
                                    <span className='text-white'>Gold Digger</span>
                                    <div className='flex flex-row gap-3'>
                                        <img src='/assets/icons/gold.svg' alt='gold' />
                                        <span className='text-white'>0.70</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}

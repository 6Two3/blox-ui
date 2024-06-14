import UserNav from './user-nav';
import { Bell } from 'lucide-react';
import { Separator } from '../ui/separator';
import Logo from '/assets/logo/logo.svg'
import Menu from '/assets/icons/home.svg'
import Game from '/assets/icons/game.svg'
import Reward from '/assets/icons/reward.svg'
import Wallet from '/assets/icons/wallet.svg'
import Coin from '/assets/icons/gold.svg'
import Cart from '/assets/icons/cart.svg'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';


export default function Header() {

  return (
    <div className="bg-dark bg-opacity-30 bg-blend-multiply">
      <div className='flex flex-row justify-between py-2 px-4'>
        <div className='flex flex-row items-center gap-2'>
          <a href="/">
            <img src={Logo} alt='logo' />
          </a>
          <button className='flex justify-center py-2 px-2 bg-dark-gray1 rounded-lg'>
            <img src={Menu} alt='menu' />
          </button>
          <Separator orientation={'vertical'} className="h-6 bg-dark-gray1" />
          <button className='flex flex-row items-center justify-center py-2 px-2 bg-dark-gray1 rounded-lg gap-3'>
            <img src={Game} alt='game' />
            <span className='text-white'>
              Game
            </span>
          </button>
          <button className='flex flex-row items-center justify-center py-1.5 px-2 bg-gold border border-gold-light rounded-lg gap-3'>
            <img src={Reward} alt='reward' />
            <span className='text-black'>
              Reward
            </span>
          </button>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <div className='flex flex-row items-center justify-center'>
            <div className='flex flex-row justify-center items-center gap-2 text-white border border-dark-gray1 rounded-l-lg px-2 py-2'>
              <img src={Coin} alt='coin' />
              0.00
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className='flex flex-row items-center justify-center py-2 px-2 bg-gold border border-gold-light gap-3 rounded-r-lg'>
                  <img src={Wallet} alt='wallet' />
                  <span className='text-black'>
                    Wallet
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] h-[500px] bg-dark-gray2 border border-dark-gray2">
                <DialogHeader>
                  <DialogTitle className='text-white'>Wallet Connect</DialogTitle>
                  <DialogDescription>
                    Please connect your wallet
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <button className='flex flex-row items-center justify-center py-1 px-2 bg-gold border border-gold-light gap-3 rounded-lg'>
            <span className='p-2 bg-black rounded-full'>
              <img src={Cart} alt='cart' />
            </span>
            <span className='text-black'>
              Marketplace
            </span>
          </button>
          <Separator orientation={'vertical'} className="h-6 bg-dark-gray1" />
          <div className='flex flex-col items-center justify-center gap-2 w-40'>
            <span className='text-white'>
              Cara
            </span>
            <div className='relative w-full h-2 bg-transparent rounded border border-gold-light'>
              <div className='absolute top-0 left-0 h-full bg-gold-light rounded' style={{ width: `${50}%` }}>
              </div>
            </div>
          </div>
          <UserNav />
          <Bell className="text-dark-gray1" />
        </div>
      </div>
    </div>
  );
}

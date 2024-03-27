type Props = {
    isOpen: boolean;
    toggle: () => void;
}
import Modal from '@/components/modal';
const search = ({ isOpen, toggle }: Props) => {
    return (
        <Modal isOpen={isOpen} closeModal={toggle} title='' size='w-[30rem]' showClose={false} background='bg-dark-blue'>
            <div>
                <input type="text" placeholder='Cari' className='w-full rounded-md p-2 focus:outline-none bg-dark-blue border-2 border-orange-500'/> 
            </div>
        </Modal>
    );
}

export default search;
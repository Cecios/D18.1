 import useSession from '../../hooks/useSession'

const MyNavbar = () => {
  const session = useSession();
    return (
        <>
          <div>
            Sono la navbar
          </div>
          
        </>
      );
}

export default MyNavbar
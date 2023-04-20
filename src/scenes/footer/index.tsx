import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem quo
            ducimus tenetur, dicta, consectetur ullam dolores, quisquam soluta
            incidunt obcaecati facere dolorem libero nostrum. Laboriosam
            similique quis accusamus beatae.
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Blah blah</p>
          <p className="my-5">Blah blah</p>
          <p>Dfdjfkd dfdjk</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="whitespace-nowrap font-bold">Contact Us</h4>
          <p className="my-5">Blah blah</p>
          <p className="my-5">Dfdjfkd dfdjk</p>
          <p>(555) 555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

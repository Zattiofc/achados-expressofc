import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Truck, Clock, Package, Phone, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      <div className="container-custom">
        {/* Top Banner */}
        <div className="py-2 text-center border-b border-white/10">
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-amber-400">
                <Package size={16} className="mr-1" />
                <span>Pague somente na entrega</span>
              </div>
              <div className="flex items-center text-amber-400">
                <Truck size={16} className="mr-1" />
                <span>Frete Grátis - Brasil</span>
              </div>
              <div className="flex items-center text-amber-400">
                <Clock size={16} className="mr-1" />
                <span>Agendamento por telefone</span>
              </div>
            </div>
            <a 
              href="https://wa.me/5547999558105" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-green-500 hover:text-green-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>(47) 99555-8105</span>
            </a>
          </div>
          
          {/* Mobile Banner - Scrolling Text */}
          <div className="md:hidden relative overflow-hidden h-6">
            <div className="animate-scrolling-text whitespace-nowrap flex items-center space-x-8 text-amber-400">
              <div className="flex items-center">
                <Package size={14} className="mr-1" />
                <span className="text-xs">Pague na entrega</span>
              </div>
              <div className="flex items-center">
                <Truck size={14} className="mr-1" />
                <span className="text-xs">Frete Grátis</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span className="text-xs">Agendamento por telefone</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <Leaf size={24} className="text-primary mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-white group-hover:text-gray-200 transition-colors">
                Mounja
              </span>{' '}
              <span className="text-primary group-hover:text-primary-light transition-colors">
                Fit
              </span>{' '}
              <span className="text-amber-400 group-hover:text-amber-300 transition-colors">
                Black
              </span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-white hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-white hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#precos" className="text-white hover:text-primary transition-colors">
              Preços
            </a>
            <a href="#faq" className="text-white hover:text-primary transition-colors">
              FAQ
            </a>
            <a 
              href="#precos" 
              className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg 
                        transition-all duration-300 flex items-center space-x-2 font-medium
                        transform hover:scale-105 shadow-lg hover:shadow-primary/20"
            >
              <ShoppingCart size={18} />
              <span>Comprar Agora</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="container-custom py-6 flex flex-col space-y-4">
              <a 
                href="#como-funciona" 
                className="text-white hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={toggleMenu}
              >
                Como Funciona
              </a>
              <a 
                href="#beneficios" 
                className="text-white hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={toggleMenu}
              >
                Benefícios
              </a>
              <a 
                href="#precos" 
                className="text-white hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={toggleMenu}
              >
                Preços
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <div className="pt-2">
                <a 
                  href="#precos" 
                  className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg 
                            transition-all duration-300 flex items-center justify-center space-x-2 
                            font-medium w-full shadow-lg hover:shadow-primary/20"
                  onClick={toggleMenu}
                >
                  <ShoppingCart size={18} />
                  <span>Comprar Agora</span>
                </a>
              </div>
              <div className="pt-2 flex justify-center">
                <a 
                  href="https://wa.me/5547999558105" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-400 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Fale Conosco: (47) 99555-8105</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
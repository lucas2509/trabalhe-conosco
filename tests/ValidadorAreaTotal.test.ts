import { validarAreaTotal } from '../src/helpers/ValidadorAreaTotal';

describe('AreaTotal', () => {
    test('Deve verificar a soma da area total True', () => {
      const data = {
        areaTotal: 100.02,
        areaAgricultavel: 50.30,
        areaVegetacao: 30.20,
      }
      expect(validarAreaTotal(data));
    });

    test('Deve verificar a soma da area total False', () => {
        const data = {
          areaTotal: 100.02,
          areaAgricultavel: 80.30,
          areaVegetacao: 30.20,
        }
        expect(!validarAreaTotal(data));
      });

    
  });
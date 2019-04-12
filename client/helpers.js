/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-escape */

import CPF from 'gerador-validador-cpf';

export function validateCPF(value) {
  return CPF.validate(value);
}

export function validateEmail(value) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

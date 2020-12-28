import { Value } from 'validate-value';
import { Case } from './abstract';

const dataType = new Value({
  type: 'object',
  required: [
    'boolean',
    'deeplyNested',
    'longString',
    'maxNumber',
    'negNumber',
    'number',
    'string',
  ],
  properties: {
    number: { type: 'number' },
    negNumber: { type: 'number' },
    maxNumber: { type: 'number' },
    string: { type: 'string' },
    longString: { type: 'string' },
    boolean: { type: 'boolean' },
    deeplyNested: {
      type: 'object',
      required: ['foo', 'bool', 'num'],
      properties: {
        foo: { type: 'string' },
        num: { type: 'number' },
        bool: { type: 'boolean' },
      },
    },
  },
});

export class ValidateValueCase extends Case implements Case {
  name = 'validate-value';

  validate() {
    const { data } = this;

    if (dataType.isValid(data)) {
      return data;
    }

    throw new Error('Invalid');
  }
}

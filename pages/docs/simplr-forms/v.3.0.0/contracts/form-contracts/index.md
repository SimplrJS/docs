---
layout: package-docs
packageName: simplr-forms
title: Simplr forms field contracts
menuTitle: Form contracts
parentGroup: contracts
group: form-contracts
version: 3.0.0
---
FormContracts
=============

More interfaces are written in core package [simplr-forms-core](../../forms-core/contracts/form-contracts.md)

### interfaces

#### FormOnSubmitCallback
```typescript
interface FormOnSubmitCallback {
    (event: React.FormEvent<HTMLFormElement | any>, store: FormsStore): void | Promise<any>;
}
```

##### Arguments
- `event: React.FormEvent<HTMLFormElement | any>` - React form on submit event 
- `store:` [FormsStore](../../forms-core/stores/forms-store.md) _from [simplr-forms-core](../../forms-core/index.md)_ - Form store


#### FormContextPropsObject
```typescript
interface FormContextPropsObject extends FormContracts.FormContextPropsObject {
    Disabled: boolean | undefined;
    ErrorClassName: string | undefined;
    ShowErrors: FieldContracts.ShowErrorsType | undefined;
    FieldTemplate: FieldContracts.FieldTemplateCallback<FieldContracts.ValueTypes | any> | undefined;
}
```

##### Extends
[FormContracts.FormContextPropsObject](../../forms-core/contracts/form-contracts.md#formcontextpropsobject) from [simplr-forms-core](../../forms-core/index.md)

##### Arguments
- `Disabled: boolean | undefined` - Form prop disable to all fields
- `ErrorClassName: string | undefined` - Form prop errorClassName to all fields
- `ShowErrors: `[FieldContracts.ShowErrorsType](../../forms-core/contracts/field-contracts.md#showerrorstype) _from [simplr-forms-core](../../forms-core/index.md)_` | undefined` - Form prop showErrors to all fields
- `FieldTemplate: `[FieldContracts.FieldTemplateCallback](../contracts/field-contracts.md#fieldtemplatecallback)`<`[FieldContracts.ValueTypes](../../forms-core/contracts/field-contracts.md#valuetypes) _from [simplr-forms-core](../../forms-core/index.md)_` | any> | undefined` - Form prop fieldTemplate to all fields
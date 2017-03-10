---
layout: package-docs
packageName: simplr-forms
title: Simplr forms field contracts
menuTitle: Field contracts
parentGroup: contracts
group: field-contracts
version: 3.0.0
---
FieldContracts
==============

More interfaces are written in core package [simplr-forms-core](../../forms-core/contracts/field-contracts.md)

### Interfaces

#### FieldTemplateCallback
```typescript
interface FieldTemplateCallback<TValue> {
    (
        field: Function,
        fieldId: string,
        store: FormsStore,
        object: { props: FieldContracts.FieldProps, state: FieldContracts.FieldDefaultState, showErrors: boolean }
    ): JSX.Element;
}
```

##### Arguments
- `field: Function` - Function that returns `RenderField` field component.
- `fieldId: string` - Field id
- `store:` [FormsStore](../../forms-core/stores/forms-store.md) _from [simplr-forms-core](../../forms-core/index.md)_ - Form store


#### FieldOnChangeCallback
```typescript
interface FieldOnChangeCallback<TElement> extends React.FormEventHandler<TElement> {
    (event: React.FormEvent<TElement>, newValue: any, fieldName: string, formId: string): void;
}
```

##### Arguments
- `event: React.FormEvent<TElement>` - React form event
- `newValue: any` - Newest value 
- `fieldName: string` - Field name
- `formId: string` - Form id
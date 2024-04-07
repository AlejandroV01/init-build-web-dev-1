````markdown
# Documentation

[Documentation](https://supabase.com/docs/reference/javascript/select)
To read rows in this table, use the select method.

## Read rows

[Documentation](https://supabase.com/docs/reference/javascript/select)

### Read all rows

```javascript
let { data: ideas, error } = await supabase.from('ideas').select('*')
```
````

### Read specific columns

```javascript
let { data: ideas, error } = await supabase.from('ideas').select('some_column,other_column')
```

### Read referenced tables

```javascript
let { data: ideas, error } = await supabase.from('ideas').select(`
    some_column,
    other_table (
      foreign_key
    )
  `)
```

### With pagination

```javascript
let { data: ideas, error } = await supabase.from('ideas').select('*').range(0, 9)
```

## Filtering

[Documentation](https://supabase.com/docs/reference/javascript/select)

Supabase provides a wide range of filters

### With filtering

```javascript
let { data: ideas, error } = await supabase
  .from('ideas')
  .select('*')
  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')
  // Arrays
  .contains('array_column', ['array', 'contains'])
  .containedBy('array_column', ['contained', 'by'])
```

## Insert rows

[Documentation](https://supabase.com/docs/reference/javascript/insert)

insert lets you insert into your tables. You can also insert in bulk and do UPSERT.

insert will also return the replaced values for UPSERT.

### Insert a row

```javascript
const { data, error } = await supabase
  .from('ideas')
  .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
  .select()
```

### Insert many rows

```javascript
const { data, error } = await supabase
  .from('ideas')
  .insert([{ some_column: 'someValue' }, { some_column: 'otherValue' }])
  .select()
```

### Upsert matching rows

```javascript
const { data, error } = await supabase.from('ideas').upsert({ some_column: 'someValue' }).select()
```

## Update rows

[Documentation](https://supabase.com/docs/reference/javascript/update)

update lets you update rows. update will match all rows by default. You can update specific rows using horizontal filters, e.g. eq, lt, and is.

update will also return the replaced values for UPDATE.

### Update matching rows

```javascript
const { data, error } = await supabase.from('ideas').update({ other_column: 'otherValue' }).eq('some_column', 'someValue').select()
```

## Delete rows

[Documentation](https://supabase.com/docs/reference/javascript/delete)

delete lets you delete rows. delete will match all rows by default, so remember to specify your filters!

### Delete matching rows

```javascript
const { error } = await supabase.from('ideas').delete().eq('some_column', 'someValue')
```

type Padding = 'small' | 'normal' | 'large' | (string & {});
function getPadding (padding: Padding): string {
if (padding === 'small') return '12px';
if (padding ===
'normal') return '16px';
if (padding ===
'large') return '24px';
return padding;
}
let padding: Padding;
padding = 'small'; // 12px
padding = '8px'; // 8px
padding = 'large';
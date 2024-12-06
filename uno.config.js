import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetAttributify from '@unocss/preset-attributify'


export default defineConfig({
    theme: {
        colors: {
            dfl: '#80D1C8', // 蒂芙尼绿
            kly: '#002EA6', // 克莱因蓝
        },
        boxShadow: {
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        },
        borderRadius: {
            'sm': '10px'
        }
    },
    rules: [
        [/^m-(\d*)$/, ([, d]) => ({margin: `${d}`})],
        [/^p-(\d*)$/, ([, d]) => ({padding: `${d}px`})],
        [/^mx-(\d*)$/, ([, d]) => ({margin: `0 ${d}px 0 ${d}px`})],
        [/^my-(\d*)$/, ([, d]) => ({margin: `${d}px 0 ${d}px 0`})],
        [/^px-(\d*)$/, ([, d]) => ({padding: `0 ${d}px 0 ${d}px`})],
        [/^py-(\d*)$/, ([, d]) => ({padding: `${d}px 0 ${d}px 0`})],

        // 设置margin-top不会自动 10rpx -> 80rpx
        [/^m(t|b|l|r*)-(\d*)$/, ([, t, d]) => {
            const map = {
                t: 'top',
                b: 'bottom',
                l: 'left',
                r: 'right',
            }
            return ({[t ? `margin-${map[t]}` : 'margin']: `${d}px`})
        }],
        // 设置margin-top不会自动 10rpx -> 80rpx
        [/^p(t|b|l|r*)-(\d*)$/, ([, t, d]) => {
            const map = {
                t: 'top',
                b: 'bottom',
                l: 'left',
                r: 'right',
            }
            return ({[t ? `padding-${map[t]}` : 'padding']: `${d}px`})
        }],
    ],
    shortcuts: [
        // flex-wrap: wrap
        [
            'f-w',
            'flex-wrap flex'
        ],
        // flex-direction: column;
        [
            'f-col',
            'flex-col flex'
        ],
        // justify-content: space-between;
        [
            'j-c-b',
            'justify-between'
        ],

        // 动态颜色
        [
            /^s-btn-(.*)$/,
            ([, c]) =>
                `bg-${c}-400 text-${c}-100  py-10 px-20  font-semibold rounded-lg shadow-md  border-none  cursor-pointer text-center`,
        ],

        // flex样式布局
        [
            /^f-((c|s|e)(-(c|s|e|b|a))*)$/,
            ([, , g1, , g2]) => {
                let style = ``;
                const temps = [
                    {k: "c", v: "center"},
                    {k: "s", v: "start"},
                    {k: "e", v: "end"},
                    {k: "b", v: "between"},
                    {k: "a", v: "around"}
                ];
                const r1 = temps.find(i => i.k == g1);
                style = `flex items-${r1?.v || "center"} content-${r1?.v || "center"}`;

                if (g2) {
                    const r2 = temps.find(i => i.k == g2);
                    style += ` justify-${r2?.v || "center"}`;
                }
                return style;
            }
        ]
    ],
    presets: [
        presetUno(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
            },
        }),
        presetAttributify(),
        presetRemToPx({
            baseFontSize: 4
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
    safelist: 'prose prose-sm m-auto text-left'.split(' '),
});

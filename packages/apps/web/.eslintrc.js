module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals', // 앱 레벨에서 명시적으로 호출
    require.resolve('@repo/config/eslint'),
  ],
};

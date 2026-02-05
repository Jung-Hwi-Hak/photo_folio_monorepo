const nextConfig = {
  // Styled Components를 사용한다면 Next.js 12 버전 이상부터는 이 설정이 필수입니다.
  compiler: {
    styledComponents: true,
  },
  // 모노레포에서 외부 패키지(common-ui 등)를 가져올 때 필요한 설정
  transpilePackages: ['@repo/common-ui', '@repo/common-utils'],
};

module.exports = nextConfig;

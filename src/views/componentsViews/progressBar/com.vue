<template>
    <div>
      <xc-progress isAnimate :percentage="60"></xc-progress>
      <br />
      <xc-progress  isAnimate status="success" :stroke-width="20" :percentage="60"></xc-progress>
      <br />
      <xc-progress :time="5000" type="circle" isAnimate :percentage="60"></xc-progress>
    </div>
  </template>
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACUCAMAAAA02EJtAAAAMFBMVEXk5ueutLfn6eqqsLTM0NLq7O26v8KnrrHf4eLHy82xt7rS1dfY29zU2Nnb3t/DyMryEXPkAAAD7klEQVR4nO2c2XLkIAwAQdz4+v+/XRg7GydxPICwoCr0U3bz0iULcYkwNhgMBoPBYDAYDAaDwaArlAJm54B9/dgtwGanPT/wWlro0RbYOmlh+Jnwz21hndmCmjcv+E+E0M6q1nonwOoLzf+4bvIA7GbuTLngUx9pAMvlp/8qq20Hrmp75/nCz81drX4b0h0jm5umiUZX1zSukCwaEC1drX8veI7r1s41/esfrrKRq9oSR9SJNnUApvvCf4lfW5iu+aJxLmgR1txE3TELuSvI/ETdseSqhaJcUFes8qDSj6xS0RhWUlFEUIMrqSpLXU9dQTtnzeWiAU+oCg4RVE46vULeiuoHjm4Pawtm/zOazBQ1/iN+plJVZdP/J4JsIaCQplyQbQktWpVswsJV1QjVuIIJreqpVCValVOpOrSpIFpfQ9op1R1mqP5tVbJcxVcAqo0AerXCyYoVW9CmZKtA/BqATBWwCSAclapC7le4mKjWq+iZlW4XwFbs3orwiA0ZVcITNig4Wj9Deca64FTpRLNvgb4iNOWtO+okiGpZdagW3Vkc0J2tvECcWoiFVpWx4tJKHFRMvaK/ECwsArTDf6f04KLFbWBZCpCPqZ0C01bdC9nFtc1lcAQyN1mC6lTtyjWvJcCT3wSfUBlloHVbGCzJ5VW3brYD+77NLmJoL4F/IekIi2yPeot637/YRfdiBKwTN7LGN5qiLoHfs0D4qbXdNxST2n+Lbfin35ZuWoI/iY3hmxbGiJelMVy7pc8edsZehdMuUjonp9ke/9EpEFA78ccuTeF4ZjFNMaYBKeW0zOv+i24I0YtZ6i+nWK83OXeQCADWLk7zfSj9Wq7Cr8MIW9sNMVA2xvKu+H8pXCG+UxNbYFPJqUV8gkOqCXbSt9/8Jrom2FLlLrDl+mlNKsZvJA9FACbspUXEy6dlwcrEYfQOIdyTWRuWJB55YXGW9c/JKlnj05/x8pniNet6Ef1APHCDcbN2RspulbMgYftUjJcVjzFDSOt/+09MvU0irJh25QSEr5SxKv0ApZwqSQDuyY//QZVmBuR1aoYrMgng4TQ9uyKng+dq1E88qhCQxTSCOYCt0KaW6Vqqim1QKKCwDoCkqFLfKLosAnxHdQFFbU2JB+fVXfNvYRTp4D+Rna6AbKRBkPsaC9VHgyQvBbAPqjDkdgw0E+WxYygjBUoeflcka9JqUPzPpG8KVMNMjeQ8HGo4/HdSi0CFlz9I0l+6th1UEZ9Yr1qW/wOTGNS5eVC5SMyACo8p0KTNWOinnzVI6x1Sjev/i7S/dwBdqCZNWNim/zokjavJiPak/ZmmVfZA2tMR6IIk1cEf4h/bxDWtKov23AAAAABJRU5ErkJggg==",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

<div class="flex flex-col gap-3">
    <div class="bg-stone-50 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg></div>
            <div>
                <p class="font-bold">Welcome!</p>
                <p class="text-sm">Selamat datang kembali, Fazril.</p>
            </div>
        </div>
    </div>

    <div class="flex flex-row gap-4 w-full">
        <div class="relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-full">
            <h1 class="ml-6 mt-6 text-sm font-bold">Viewers</h1>
            <div class="pt-6 px-2 pb-0">
                <div id="bar-chart"></div>
            </div>
        </div>

        <div class="relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-1/2">
            <h1 class="ml-6 mt-6 text-sm font-bold">Href Clicked</h1>
            <div class="pt-6 px-2 pb-0 w-full flex justify-center items-center">
                <div id="pie-chart"></div>
            </div>
        </div>
    </div>


</div>

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

{{-- link clicked chart --}}
<script>
    const pieConfig = {
    series: [44, 55, 13, 43, 22],
    chart: {
        type: "pie",
        width: 280,
        height: 280,
        toolbar: {
        show: false,
        },
    },
    title: {
        show: "",
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
        show: false,
    },
};
 
(new ApexCharts(document.querySelector("#pie-chart"), pieConfig)).render()
</script>

{{-- viewer chart --}}
<script>
    const categories = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]

    let data = @json($viewers);
        data = categories.map((v) => {
            let views = data.find(({month}) => month.toLowerCase().includes(v.toLowerCase()))
            return views ? views.total : 0
        })

    const barConfig = {
    series: [
      {
        name: "Viewers",
        data,
      },
    ],
    chart: {
      type: "bar",
      height: 240,
      toolbar: {
        show: true,
      },
    },
    title: {
      show: true
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#14b8a6"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  };
   
  (new ApexCharts(document.querySelector("#bar-chart"), barConfig)).render();
</script>
@endpush
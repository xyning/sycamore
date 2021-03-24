window.BENCHMARK_DATA = {
  "lastUpdate": 1616560359579,
  "repoUrl": "https://github.com/lukechu10/maple",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "11802a9a1d35c2573abdb79447e13b40ba27ff83",
          "message": "Setup continuous benchmark\n\nPush continuous benchmark results to gh_pages\n\nFix cargo bench command",
          "timestamp": "2021-03-17T19:49:56-07:00",
          "tree_id": "4f61562eff826f8fe365e54b622b63c998cd79b7",
          "url": "https://github.com/lukechu10/maple/commit/11802a9a1d35c2573abdb79447e13b40ba27ff83"
        },
        "date": 1616036009473,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49388,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408867,
            "range": "± 24368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c",
          "message": "Iteration (#49)\n\n* enable clone_on_ref_path\r\n\r\n* SignalVec\r\n\r\n* wip\r\n\r\n* Fix\r\n\r\n* wip\r\n\r\n* Add test for dropping owner inside create_root\r\n\r\n* cleanup\r\n\r\n* Simplify create_effect_initial\r\n\r\n* Cleanup\r\n\r\n* Add map_chain test\r\n\r\n* Todo demo\r\n\r\n* Fix insert\r\n\r\n* Fix compile error\r\n\r\n* Test map_chain_temporary\r\n\r\n* Update wasm-bindgen to 0.2.72\r\n\r\n* Fix netlify-build\r\n\r\n* Add to_vec",
          "timestamp": "2021-03-18T15:54:02-07:00",
          "tree_id": "2a0b53f131ed86eaeb2102c91f2feefafe40545b",
          "url": "https://github.com/lukechu10/maple/commit/291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c"
        },
        "date": 1616108220084,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54818,
            "range": "± 2432",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 358986,
            "range": "± 19175",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "128c3294392c6a456aeae131778d1f7f5c86cc1c",
          "message": "Iteration on `Signal<Vec>` and integration tests (#51)\n\n* wip\r\n\r\n* fix\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Add some integration tests\r\n\r\n* Fix test command in CI\r\n\r\n* Indexed\r\n\r\n* Remove excess nodes\r\n\r\n* Add some basic integration tests\r\n\r\n* Update changed nodes\r\n\r\n* Remove unused variabe\r\n\r\n* Keyed\r\n\r\n* Fix Keyed\r\n\r\n* Fix clippy\r\n\r\n* Add integration test for Indexed",
          "timestamp": "2021-03-23T20:52:06-07:00",
          "tree_id": "9b35766bebb5452f736475f18a5835deba37e853",
          "url": "https://github.com/lukechu10/maple/commit/128c3294392c6a456aeae131778d1f7f5c86cc1c"
        },
        "date": 1616558145110,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56522,
            "range": "± 2722",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 392673,
            "range": "± 15596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe32999412d1ef0d3932d78c0f7ba9019d06708a",
          "message": "Fix debug assertion (#53)",
          "timestamp": "2021-03-23T21:29:24-07:00",
          "tree_id": "79cb6c23a7b2b879e481eb4dbb45ae95b7dd14cf",
          "url": "https://github.com/lukechu10/maple/commit/fe32999412d1ef0d3932d78c0f7ba9019d06708a"
        },
        "date": 1616560359088,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52874,
            "range": "± 3282",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 378377,
            "range": "± 11683",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
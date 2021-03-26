window.BENCHMARK_DATA = {
  "lastUpdate": 1616735047093,
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
          "id": "3314992d74d923ff7557608837cc4919a6d03273",
          "message": "Fix reactive bindings inside Indexed and Keyed children (#54)\n\n* Fix clippy\r\n\r\n* Remove Option<TemplateResult> in Indexed and Keyed\r\n\r\n* create_effect_initial call initial() in create_root\r\n\r\n* Call template function inside reactive root\r\n\r\n* Add docs for Keyed and Indexed\r\n\r\n* Add some more docs and doctests",
          "timestamp": "2021-03-24T12:55:33-07:00",
          "tree_id": "340227bbda14f65e7a25cc97ef51fd8a773f2d1b",
          "url": "https://github.com/lukechu10/maple/commit/3314992d74d923ff7557608837cc4919a6d03273"
        },
        "date": 1616615927340,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58505,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 374764,
            "range": "± 3930",
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
          "id": "8cb05bd80bf0baa5dc9db09c7015c3794562b733",
          "message": "Node refs (#57)\n\n* NodeRef\r\n\r\n* Set NodeRef with template! macro\r\n\r\n* Add NodeRef integration test",
          "timestamp": "2021-03-24T14:01:47-07:00",
          "tree_id": "63c3f7cdd5c3927b3eb222f797e2b67c978e7232",
          "url": "https://github.com/lukechu10/maple/commit/8cb05bd80bf0baa5dc9db09c7015c3794562b733"
        },
        "date": 1616619938774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58393,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408288,
            "range": "± 20280",
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
          "id": "8eda5aa825f3c6541aa280dbdb123bf08dd72f1c",
          "message": "Complete TodoMVC spec conforming implementation (#60)\n\n* Add fmt::Debug implementation to Signal and StateHandle\r\n\r\n* Create Header and Copyright components\r\n\r\n* Parse keywords in component path\r\n\r\n* Fix parsing with a Component followed by interpolated value\r\n\r\n* List and Item\r\n\r\n* Handle todo edit\r\n\r\n* Update trybuild tests\r\n\r\n* Toggle complete all\r\n\r\n* Add untrack utility\r\n\r\n* Fixes\r\n\r\n* Footer\r\n\r\n* Save todos to localStorage\r\n\r\n* Get Filter from Hash\r\n\r\n* Clear completed\r\n\r\n* Set value when entering editing mode",
          "timestamp": "2021-03-25T21:32:45-07:00",
          "tree_id": "c3fed21ccf6be373ddc701a96070e6ab6e15ed9d",
          "url": "https://github.com/lukechu10/maple/commit/8eda5aa825f3c6541aa280dbdb123bf08dd72f1c"
        },
        "date": 1616733355532,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49259,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 349624,
            "range": "± 8185",
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
          "id": "c18f28534bd36f67c2a884de4f21fe891f694041",
          "message": "Release 0.4.0 (#61)\n\n* Release 0.4.0\r\n\r\n* fixes",
          "timestamp": "2021-03-25T22:00:55-07:00",
          "tree_id": "edfbbd0b5f995c73d1950d7947cdc59a18c940e9",
          "url": "https://github.com/lukechu10/maple/commit/c18f28534bd36f67c2a884de4f21fe891f694041"
        },
        "date": 1616735046671,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47596,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 347333,
            "range": "± 26747",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
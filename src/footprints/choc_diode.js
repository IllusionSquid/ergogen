// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
// 
// note: hotswap and reverse can be used simultaneously

module.exports = {
  nets: {
    from: undefined,
    to: undefined,
    vss: undefined,
    vdd: undefined,
    din: undefined,
    dout: undefined
  },
  params: {
    class: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    key_silks: false,
    diode: false,
    diode_silks: true,
    rgb: false,
    traces: false
  },
  body: p => {
    const RGB_Offset = 4.7;
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))      
      
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
        
      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))

      
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    
    function key_silks(reverse) {
      template = `
      ${''/* Key coord silks */}
      (fp_text user "(R${p.net.to.name.substring(3)}, C${p.net.from.name.substring(3)})" (at 0 2.54 ${p.rot} unlocked) (layer "B.SilkS")
        (effects 
          (font (size 0.6 0.6) (thickness 0.15))
          (justify mirror)
        )
      )
      `
      
      if (reverse)
        template += `
        (fp_text user "(R${p.net.to.name.substring(3)}, C${p.net.from.name.substring(3)})" (at 0 2.54 ${p.rot} unlocked) (layer "F.SilkS")
          (effects (font (size 0.6 0.6) (thickness 0.15)))
        )
        `
      
      return template
    } 
    
    function diode(reversible, silks) {
      let template = `
      ${''/* SMD pads on both sides */}
      (pad 2 smd rect (at 8 0.35 ${p.rot-90}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.local_net('Diode').str})
      (pad 3 smd rect (at 8 3.65 ${p.rot-90}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.to.str})
      `

      if (reversible)
        template += `
        (pad 2 smd rect (at 8 0.35 ${p.rot-90}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.local_net('Diode').str})
        (pad 3 smd rect (at 8 3.65 ${p.rot-90}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})
        (pad 3 thru_hole circle (at 8 2.5) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.to.str})
        (pad 2 thru_hole circle (at 8 1.5) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.local_net('Diode').str})
        `
      
      if (silks) {
        template += `
        ${''/* diode symbols */}
        (fp_line (start 8 1) (end 8 1.65) (layer B.SilkS) (width 0.1))

        (fp_line (start 7.45 2.25) (end 8.55 2.25) (layer B.SilkS) (width 0.1))
        (fp_line (start 8.4 1.65) (end 8 2.25) (layer B.SilkS) (width 0.1))

        (fp_line (start 8 2.25) (end 7.6 1.65) (layer B.SilkS) (width 0.1))

        (fp_line (start 7.6 1.65) (end 8.4 1.65) (layer B.SilkS) (width 0.1))

        (fp_line (start 8 2.25) (end 8 3) (layer B.SilkS) (width 0.1))
        `
        
        if (reversible)
        template += `
        fp_line (start 8 1) (end 8 1.65) (layer F.SilkS) (width 0.1))

        (fp_line (start 7.45 2.25) (end 8.55 2.25) (layer F.SilkS) (width 0.1))
        (fp_line (start 8.4 1.65) (end 8 2.25) (layer F.SilkS) (width 0.1))

        (fp_line (start 8 2.25) (end 7.6 1.65) (layer F.SilkS) (width 0.1))

        (fp_line (start 7.6 1.65) (end 8.4 1.65) (layer F.SilkS) (width 0.1))

        (fp_line (start 8 2.25) (end 8 3) (layer F.SilkS) (width 0.1))
        `
      }
        

      return template
    } 

    const diode_traces = `
    ${''/* Diode SMD Traces */}
    (pad 2 smd custom (at 8 2.5 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0 1.15) (width 0.25))
      )
    )
    (pad 2 smd custom (at 8 2.5 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.local_net('Diode').str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0 1.15) (width 0.25))
      )
    
    (pad 3 smd custom (at 8 1.5 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.to.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
      )
    )
    (pad 3 smd custom (at 8 1.5 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.to.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
      )
    
    
    ${''/* Column SMD Traces */}
    (pad 1 smd custom (at 3.275 -5.95 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.from.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.5 0.5) (width 0.25))
        (gr_line (start -0.5 0.5) (end -0.5 7.525) (width 0.25))
        (gr_line (start -0.5 7.525) (end 1.725 9.75) (width 0.25))
      )
    )
    (pad 1 smd custom (at -3.275 -5.95 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.from.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.5 0.5) (width 0.25))
        (gr_line (start 0.5 0.5) (end 0.5 7.525) (width 0.25))
        (gr_line (start 0.5 7.525) (end -1.725 9.75) (width 0.25))
      )
    )
    (pad 1 smd custom (at -5 3.8 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.from.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 10 0) (width 0.25))
      )
    
    ${''/* "Inner" SMD Traces */}
    (pad 2 smd custom (at -8.275 -3.75 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0 6.4) (width 0.25))
        (gr_line (start 0 6.4) (end 3.25 9.65) (width 0.25))
        (gr_line (start 3.25 9.65) (end 8.275 9.65) (width 0.25))
      )
    )
    (pad 2 smd custom (at 0 5.9 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 5.75 0) (width 0.25))
        (gr_line (start 5.75 0) (end 8 -2.25) (width 0.25))
      )
    )
    (pad 2 smd custom (at 8.275 -3.75 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.local_net('Diode').str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -1.5 1.5) (width 0.25))
        (gr_line (start -1.5 1.5) (end -1.5 5.025) (width 0.25))
        (gr_line (start -1.5 5.025) (end -0.275 6.25) (width 0.25))
      )
    )
    `

    function rgb(reverse) {
      let template = `
      (fp_line (start 1.6 ${-1.4 + RGB_Offset}) (end 1.6 ${1.4 + RGB_Offset}) (layer Cmts.User) (width 0.12))
      (fp_line (start 1.6 ${1.4 + RGB_Offset}) (end -1.6 ${1.4 + RGB_Offset}) (layer Cmts.User) (width 0.12))
      (fp_line (start -1.6 ${1.4 + RGB_Offset}) (end -1.6 ${-1.4 + RGB_Offset}) (layer Cmts.User) (width 0.12))
      (fp_line (start -1.6 ${-1.4 + RGB_Offset}) (end 1.6 ${-1.4 + RGB_Offset}) (layer Cmts.User) (width 0.12))
      (fp_line (start 1.7 ${-1.5 + RGB_Offset}) (end 1.7 ${1.5 + RGB_Offset}) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.7 ${1.5 + RGB_Offset}) (end -1.7 ${1.5 + RGB_Offset}) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.7 ${1.5 + RGB_Offset}) (end -1.7 ${-1.5 + RGB_Offset}) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.7 ${-1.5 + RGB_Offset}) (end 1.7 ${-1.5 + RGB_Offset}) (layer Edge.Cuts) (width 0.12))

      (fp_poly (pts (xy 2.8 ${1.4 + RGB_Offset}) (xy 2.2 ${1.4 + RGB_Offset}) (xy 2.2 ${2 + RGB_Offset})) (layer B.SilkS) (width 0.1))
      (pad "4" smd rect (at -2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.vdd.str})
      (pad "5" smd rect (at -2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.dout.str})
      (pad "7" smd rect (at 2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.din.str})
      (pad "6" smd roundrect (at 2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.net.vss.str})

      
      `
      if (reverse)
        template += `
        (fp_poly (pts (xy 2.8 ${-1.4 + RGB_Offset}) (xy 2.2 ${-1.4 + RGB_Offset}) (xy 2.2 ${-2 + RGB_Offset})) (layer F.SilkS) (width 0.1))
        (pad "4" smd rect (at -2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.vdd.str})
        (pad "5" smd rect (at -2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.dout.str})
        (pad "7" smd rect (at 2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.din.str})
        (pad "6" smd roundrect (at 2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) ${p.net.vss.str})  

        (pad 6 thru_hole circle (at 5.5 ${RGB_Offset}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.vss.str})
        (pad 6 smd custom (at 2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.vss.str}
          (zone_connect 2)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 2.2 0) (width 0.5))
            (gr_line (start 2.2 0) (end 2.95 0.75) (width 0.5))
          )
        )
        (pad 6 smd custom (at 2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.vss.str}
          (zone_connect 2)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 2.2 0) (width 0.5))
            (gr_line (start 2.2 0) (end 2.95 -0.75) (width 0.5))
          )
        )

        (pad 7 thru_hole circle (at 4.3 ${RGB_Offset}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.din.str})
        (pad 7 smd custom (at 2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.din.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1 0) (width 0.25))
            (gr_line (start 1 0) (end 1.75 -0.75) (width 0.25))
          )
        )
        (pad 7 smd custom (at 2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.din.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1 0) (width 0.25))
            (gr_line (start 1 0) (end 1.75 0.75) (width 0.25))
          )
        )

        (pad 5 thru_hole circle (at -5.5 ${RGB_Offset}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.dout.str})
        (pad 5 smd custom (at -2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.dout.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -2.2 0) (width 0.25))
            (gr_line (start -2.2 0) (end -2.95 0.75) (width 0.25))
          )
        )
        (pad 5 smd custom (at -2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.dout.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -2.2 0) (width 0.25))
            (gr_line (start -2.2 0) (end -2.95 -0.75) (width 0.25))
          )
        )

        (pad 4 thru_hole circle (at -4.3 ${RGB_Offset}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.vdd.str})
        (pad 4 smd custom (at -2.55 ${0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.vdd.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1 0) (width 0.5))
            (gr_line (start -1 0) (end -1.75 -0.75) (width 0.5))
          )
        )
        (pad 4 smd custom (at -2.55 ${-0.75+ RGB_Offset} ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.vdd.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1 0) (width 0.5))
            (gr_line (start -1 0) (end -1.75 0.75) (width 0.5))
          )
        )
        `
      
      return template 
    }

    function key_hotswap(reverse) {
        return `
        ${'' /* holes */}
        (pad "" np_thru_hole circle (at ${reverse ? '-' : ''}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
    
        ${'' /* net pads */}
        (pad 1 smd rect (at ${reverse ? '' : '-'}3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers ${reverse ? 'F' : 'B'}.Cu ${reverse ? 'F' : 'B'}.Paste ${reverse ? 'F' : 'B'}.Mask)  ${p.net.from.str})
        (pad 2 smd rect (at ${reverse ? '-' : ''}8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers ${reverse ? 'F' : 'B'}.Cu ${reverse ? 'F' : 'B'}.Paste ${reverse ? 'F' : 'B'}.Mask)  ${p.local_net('Diode').str})
        `
    }

    function key_pins(reverse) {
      return `
      ${''/* pins */}
      (pad 1 thru_hole circle (at ${reverse ? '-' : ''}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.net.from.str})
      (pad 2 thru_hole circle (at ${reverse ? '-' : ''}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.local_net('Diode').str})
      `
  }

    function key(reverse, hotswap) {
      template = ``

      if (hotswap) {
        template += key_hotswap(false)
        if (reverse)
          template += key_hotswap(true)
      } else {
        template += key_pins(false)
        if (reverse)
          template += key_pins(true)
      }

      return template
    }

    function traces(reverse, diode, hotswap, rgb) {
      template = ``

      if (diode) {
        if (hotswap) {
          template += `
          (pad 1 thru_hole circle (at 0 -3.95) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.from.str})

          (pad 1 smd custom (at 3.275 -5.95 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.from.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end -2 2) (width 0.25))
              (gr_line (start -2 2) (end -3.275 2) (width 0.25))
            )
          )

          (pad 1 smd custom (at -3.275 -5.95 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.from.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 2 2) (width 0.25))
              (gr_line (start 2 2) (end 3.275 2) (width 0.25))
            )
          )


          (pad 2 smd custom (at -8.275 -3.75 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 2 2) (width 0.25))
              (gr_line (start 2 2) (end 6 2) (width 0.25))
              (gr_line (start 6 2) (end 6.5 1.5) (width 0.25))
              (gr_line (start 6.5 1.5) (end 10.05 1.5) (width 0.25))
              (gr_line (start 10.05 1.5) (end 10.55 2) (width 0.25))
              (gr_line (start 10.55 2) (end 15.275 2) (width 0.25))
              (gr_line (start 15.275 2) (end 16.275 3) (width 0.25))
              (gr_line (start 16.275 3) (end 16.275 4.1) (width 0.25))
            )
          )

          (pad 2 smd custom (at 8.275 -3.75 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.local_net('Diode').str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end -0.275 0.275) (width 0.25))
              (gr_line (start -0.275 0.275) (end -0.275 4.1) (width 0.25))
            )
          )

          (pad 3 smd custom (at 8 2.5 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.to.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0 1.15) (width 0.25))
            )
          )
          (pad 3 smd custom (at 8 2.5 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.to.str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0 1.15) (width 0.25))
            )
          )
          
          (pad 2 smd custom (at 8 1.5 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
            )
          )
          (pad 2 smd custom (at 8 1.5 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.local_net('Diode').str}
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
            )
          )
          `
        } else {
          
        }
        
      } else {
        
      }

      return template
    }

    return `
    ${standard}
    ${p.param.keycaps ? keycap : ''}
    ${p.param.key_silks ? key_silks(p.param.reverse) : ''}
    ${p.param.diode ? diode(p.param.reverse, p.param.diode_silks) : ''}
    ${key(p.param.reverse, p.param.hotswap)}
    ${p.param.rgb ? rgb(p.param.reverse) : ''}
    ${p.param.traces ? traces(p.param.reverse, p.param.diode, p.param.hotswap, p.param.rgb) : ''}

    )
    `
  }
}
